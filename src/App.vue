<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <v-card class="flex-fill pa-12">
        <TextFeeder v-if="text === '' || back" @textfeeder="setText" :text="text" :isLoading="isLoading" />
      <DisplayWord v-else-if="!isLoading" :text="computedText" @back="back = true"/>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
const DisplayWord = () => import('@/components/DisplayWord');
const TextFeeder = () => import('@/components/TextFeeder');

export default {
  name: 'App',

  components: {
    TextFeeder,
    DisplayWord,
  },

  data: () => ({
    isLoading: false,
    text: '',
    computedText: [],
    back: false
  }),
  methods: {
    setText($event) {
      this.text = $event;
      this.back = false;
    }
  },
  watch: {
    text(newValue) {
      if (newValue === '') {
        return;
      }
      this.isLoading = true;
      this.computedText = newValue.split(/[ \n]+/);
      this.isLoading = false;
    }
  }
};
</script>
