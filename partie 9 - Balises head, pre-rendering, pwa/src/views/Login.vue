<template>
  <div>
    <h1>Connexion</h1>
    <v-form>
      <v-text-field type="text" label="login" v-model="login" @click="error=''"></v-text-field>
      <v-text-field type="password" label="Mot de passe" v-model="password" @click="error=''"></v-text-field>
      <v-btn @click="connexionAction" color="primary">Connexion</v-btn>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async connexionAction() {
      const testConnexion = await this.axios.get(
        `${process.env.VUE_APP_API_SERVER}/users`,
        {
          params: {
            login: this.login,
            password: this.password
          }
        }
      );

      if (testConnexion.data.length) {
        this.$store.dispatch("updateUser", { name: this.login });
        this.$router.push({ name: "Admin" });
      } else {
        this.error = "Mauvais login ou mot de passe";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>