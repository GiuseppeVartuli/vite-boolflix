<script>
import CardsApp from "./components/CardsApp.vue";
import SearchApp from "./components/SearchApp.vue";
export default {
  name: "App",
  components: {
    CardsApp,
    SearchApp,
  },
};
</script>

<template>
  <div class="container">
    <div class="raw">
      <SearchApp></SearchApp>
      <CardsApp></CardsApp>
    </div>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>
