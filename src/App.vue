<script>
import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";
import { store } from "./store.js";

export default {
  name: "App",

  components: {
    HeaderApp,
    MainApp,
  },
  data() {
    return {
      movies: [],
      series: [],
      searchText: "",
      store,
      movie: {},
    };
  },

  mounted() {
    // console.log(store.api_movie_url.length);
    // console.log(store.api_movie_url);
    // store.searchMovies();
  },
};
</script>

<template>
  <HeaderApp></HeaderApp>
  <MainApp></MainApp>
</template>

<style></style>
