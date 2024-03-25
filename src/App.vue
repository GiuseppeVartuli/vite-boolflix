<script>
import CardMovieApp from "./components/CardMovieApp.vue";
import HeaderApp from "./components/HeaderApp.vue";
import CardSerieApp from "./components/CardSerieApp.vue";
import { store } from "./store.js";

export default {
  name: "App",

  components: {
    CardMovieApp,
    CardSerieApp,
    HeaderApp,
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
  <div class="container">
    <div class="raw">
      <CardMovieApp></CardMovieApp>
      <CardSerieApp></CardSerieApp>
    </div>
  </div>
</template>

<style>
.fa-star {
  color: #ccc;
}

.gold {
  color: goldenrod;
}
</style>
