<template>
    <div>
    <v-card height="30vh">
        <v-row align="center" justify="center" class="fill-height">
       <v-col class="text-center">
            {{ currentWord }}
       </v-col>
        </v-row>
    </v-card>
        <MediaBar ref="mediaBar" :wordLength="currentWord.length" @changeposition="currentIndex = $event" @nextword="currentIndex++" @back="$emit('back')"></MediaBar>
    </div>
</template>

<script>
  const MediaBar = () => import('@/components/MediaBar');
  export default {
    name: 'DisplayWord',
    data() {
      return {
        currentIndex: 0,
        textLength: this.text.length
      }
    },
    computed: {
      currentWord() {
        if (this.currentIndex >= this.textLength) {
          this.$refs.mediaBar.stop();
        }
        return this.text[this.currentIndex];
      }
    },
    components: {MediaBar},
    props: {
      text: {
        type: Array,
        required: true
      }
    }
  };
</script>

<style scoped>
    .col {
        font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        font-size: 9rem;
    }

</style>