<template>
  <div>
    <v-row>
      <v-col cols="12" sm="4">
        <v-img :src="book.image" :alt="'couverture du livre : ' + book.title "></v-img>
      </v-col>
      <v-col cols="12" sm="8">
        <h1>{{ book.title }}</h1>
        <p class="book__author">{{ book.author }}</p>
        <v-rating readonly="readonly" v-model="book.rating" color="accent"></v-rating>
        <p class="book__description">{{ book.description }}</p>
        <p>
          <Acheter :book="book" large="true" />
        </p>
      </v-col>
      <div class="book__content">{{ book.content }}</div>
    </v-row>
  </div>
</template>

<script>
import Acheter from "@/components/Acheter";

export default {
  components: {
    Acheter
  },
  data() {
    return {
      book: {}
    };
  },
  async created() {
    const bookData = await this.axios.get(
      `${process.env.VUE_APP_API_SERVER}/books/${this.$route.params.id}`
    );
    this.book = bookData.data;
  }
};
</script>

<style lang="scss" scoped>
</style>