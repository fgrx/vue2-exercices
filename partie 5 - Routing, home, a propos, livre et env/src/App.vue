<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Magasin de livres pour codeurs web</v-toolbar-title>
       <v-spacer></v-spacer>

       <v-btn :to="{name:'Home'}" class='mr-1' exact>Accueil</v-btn>
       <v-btn :to="{name:'About'}" class='mr-1' >A propos</v-btn>

    </v-app-bar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
  
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">

</style>