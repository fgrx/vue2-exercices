<template>
  <v-card :color="book.top ? 'yellow lighten-4' : null" min-height="650px">
    <v-img :src="book.image" :alt="'couverture du livre : ' + book.title "></v-img>
    <v-card-title>{{ book.title }}</v-card-title>
    <v-card-text>{{ book.description}}
      <p>
        <span v-if="book.quantity>0">Disponible</span>
        <span v-else>Indisponible</span>
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="addToFavsAction" text><v-icon>mdi-heart</v-icon> wishlist</v-btn>
      <v-spacer></v-spacer>
      <v-rating readonly="readonly" v-model="book.rating" color="accent"></v-rating>
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
    addToFavsAction() { 
      this.$emit("addToFavs",this.book)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>