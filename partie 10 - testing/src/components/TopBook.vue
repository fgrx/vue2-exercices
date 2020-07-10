<template>
  <div>
    <hr />
    <span data-test-id="bookTitle">Top livre : {{ book.title }}</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      book: "",
      test: "hello"
    };
  },

  async created() {
    this.displayAlert();
    const getBookData = await axios.get("http://localhost:3000/books/5s48s81");
    this.book = getBookData.data;
  },

  methods: {
    displayAlert() {
      alert("Bonjour ! ");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>