<template>
  <div>
    <input data-test-id="fieldName" type="text" v-model="nom" />
    <input data-test-id="buttonAction" type="button" @click="displayNomAction" value="Afficher" />

    <div data-test-id="message" v-if="message">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    introduction: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      nom: "",
      message: ""
    };
  },
  methods: {
    displayNomAction() {
      this.message = this.introduction + this.nom;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>