<template>
        <v-row>
            <v-col cols="auto">
                <v-card>
                    <v-btn @click="goBack"><v-icon>mdi-backup-restore</v-icon></v-btn>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>

            <v-col cols="auto">
            <v-card>

            <v-btn v-if="!started" @click="start"> <v-icon>mdi-play</v-icon></v-btn>
    <v-btn v-else @click="pause"><v-icon>mdi-pause</v-icon></v-btn>
                <v-btn @click="stop"><v-icon>mdi-stop</v-icon></v-btn>

            </v-card>
        </v-col>
            <v-spacer></v-spacer>

            <v-col cols="auto">
        <v-combobox v-model="speedSelected" solo clearable auto-select-first cache-items type="number" label="Vitesse en mots par seconde" hint="Choisir un nombre ou en entrer un" :items="speeds"/>
        </v-col>
        </v-row>

</template>

<script>

  export default {
    name: 'MediaBar',
    data() {
      return {
        t: null,
        started: false,
        speeds: Array.from(Array(75), (x, index) => (index + 1) * 25),
        speedSelected: 300,
      }
    },
    props: {
      wordLength: {
        type: Number,
        default: 0
      }
    },
    methods: {
      waitBeforeNextWord() {
        let _this = this;
        this.t = setInterval(function() {
          _this.$emit('nextword')
        }, this.interval)
      },
      start() {
        this.started = true;
        this.waitBeforeNextWord();
      },
      pause () {
        this.started = false;
        clearInterval(this.t);
      },
      stop () {
        this.started = false;
        clearInterval(this.t);
        this.changeCurrentPosition(0)
      },
      changeCurrentPosition(position) {
        this.$emit('changeposition', position)
      },
      goBack() {
        this.$emit('back')
      }
    },
    created() {
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
          e.preventDefault();
          if (this.started) {
            return this.pause();
          }
          return this.start();
        }
        // if (e.code === 'ArrowLeft') {
        //
        // }
        // if (e.code === 'ArrowRight') {
        //
        // }
      });
    },
    computed: {
      interval() {
        return (60 / this.speedSelected) * 1000;
      }
    },
    watch: {
      speedSelected() {
        if (!this.started) {
          return
        }
        clearInterval(this.t);
        this.waitBeforeNextWord();
      }
    }
  };
</script>

<style scoped>

</style>