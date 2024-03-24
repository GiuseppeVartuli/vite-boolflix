<script>
import CardMovieApp from "./components/CardMovieApp.vue";
import SearchApp from "./components/SearchApp.vue";
import FlagApp from "./components/FlagApp.vue";
import { store } from "./store.js";

export default {
  name: "App",

  components: {
    CardMovieApp,
    SearchApp,
    FlagApp,
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
    console.log(store.api_movie_url.length);
    console.log(store.api_movie_url);
    store.searchMovies();
  },
};
</script>

<template>
  <div class="container">
    <div class="raw">
      <SearchApp></SearchApp>

      <h1>Film</h1>

      <div class="movie" v-for="movie in store.movies">
        <img :src="`${store.api_img_url}w342${movie.poster_path}`" alt="" />
        <div class="description">
          <p class="title">{{ movie.title }}</p>
          <p class="original_title">{{ movie.original_title }}</p>
          <p class="language">
            <span
              class="flag-icon"
              :class="store.getLanguageFlagClass(movie.original_language)"
            ></span>
          </p>

          <div v-if="movie">
            <div v-if="movie">
              <div v-for="index in 5" :key="index">
                <i
                  class="fas fa-star"
                  :class="store.starsClass(index, movie.vote_average)"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Serie</h1>
      <div class="series" v-for="serieItem in store.series">
        <img :src="`${store.api_img_url}w342${serieItem.poster_path}`" alt="" />
        <div class="description">
          <p class="title">{{ serieItem.title }}</p>
          <p class="original_title">{{ serieItem.original_title }}</p>
          <p class="language">
            <span
              class="flag-icon"
              :class="store.getLanguageFlagClass(serieItem.original_language)"
            ></span>
          </p>

          <div v-if="serieItem">
            <div v-for="index in 5" :key="index">
              <i
                class="fas fa-star"
                :class="store.starsClass(index, serieItem.vote_average)"
              ></i>
            </div>
          </div>
        </div>
      </div>
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
