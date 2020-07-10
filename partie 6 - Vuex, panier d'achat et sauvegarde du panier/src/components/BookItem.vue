<template>
  <v-card  :color="book.top ? 'yellow lighten-4' : null" min-height="650px">
    <router-link :to="{name:'Book',params:{id:book.id}}">
      <v-img :src="book.image" :alt="'couverture du livre : ' + book.title "></v-img>
    </router-link>
    <v-card-title>{{ book.title }}</v-card-title>
     <v-rating readonly="readonly" v-model="book.rating" color="accent"></v-rating>
    <v-card-text>{{ book.description}}</v-card-text>
    <v-card-actions>
      <span v-if="book.quantity>0">Disponible</span>
      <span v-else>Indisponible</span>
      <v-spacer></v-spacer>
      <v-btn @click="buy" v-if="book.quantity>0" dark color="pink"><v-icon>mdi-basket</v-icon> Acheter</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: null
    }
  },
  methods: {
    buy() {
      const achatsInStore=this.$store.state.achats.achats;
      achatsInStore.push(this.book);
      this.$store.dispatch("updateAchats",achatsInStore)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>