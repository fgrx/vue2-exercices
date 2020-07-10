<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DisplayName introduction="Mon nom est " />

    <TopBook />

  </div>
</template>

<script>
import TopBook from '@/components/TopBook.vue'
import DisplayName from "@/components/DisplayName.vue";

export default {
  name: "App",
  components: { DisplayName, TopBook }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
