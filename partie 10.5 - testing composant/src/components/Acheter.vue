<template>
  <div>
    <v-btn
      color="pink"
      dark
      data-test-id="buttonBuyAction"
      v-if="book.quantity"
      @click="buyAction(book)"
      :x-large="large"
    >Acheter</v-btn>
    <v-btn disabled v-else>Epuisé</v-btn>
  </div>
</template>

<script>
import BuyBook from "@/mixins/BuyBook";

export default {
  mixins: [BuyBook],
  props: {
    book: {
      type: Object,
      default: null
    },
    large: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    buyAction(book) {
      this.buy(book);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>