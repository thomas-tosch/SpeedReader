<template>
    <div>
    <v-textarea v-model="providedText" :rules="[rules.required]" clearable solo :loading="isLoading"/>
        <v-btn @click="validateText" block>Lire ce texte</v-btn>
    </div>
</template>

<script>
  export default {
    name: 'TextFeeder',
    data() {
      return {
        providedText: this.text,
        rules: {
          required: v => !!v || 'Le texte renseigné ne peut pas être vide.',
        }
      }
    },
    props: {
      text: {
        type: String,
        default: ''
      },
      isLoading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      validateText() {
        if (this.providedText !== '') {
         this.$emit('textfeeder', this.providedText)
        }
      },
    }
  };
</script>

<style scoped>

</style>