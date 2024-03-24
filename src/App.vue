<script>
import CardMovieApp from "./components/CardMovieApp.vue";
import SearchApp from "./components/SearchApp.vue";
import CardSerieApp from "./components/CardSerieApp.vue";
import { store } from "./store.js";

export default {
  name: "App",

  components: {
    CardMovieApp,
    SearchApp,
    CardSerieApp,
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
  <div class="container">
    <div class="raw">
      <SearchApp></SearchApp>
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
