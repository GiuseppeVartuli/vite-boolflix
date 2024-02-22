<script>
import CardsApp from "./components/CardsApp.vue";
import SearchApp from "./components/SearchApp.vue";
import { store } from "./store.js";
import axios from "axios";
export default {
  name: "App",
  store,
  components: {
    CardsApp,
    SearchApp,
  },
  data() {
    return {
      movies: [],
      searchText: "",
    };
  },
  computed: {},
  mounted() {
    console.log(store.api_movie_url.length);
    console.log(store.api_movie_url);
  },
  methods: {
    movieResults() {
      const urlMovie = `${store.api_movie_url}api_key=${store.api_key}&query=${this.searchText}`;
      console.log(urlMovie);
    },
    fetchData() {
      axios
        .get(urlMovie)
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch((error) => {
          console.error("Errore nella richiesta:", error);
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="raw">
      <input
        name="searchText"
        type="text"
        placeholder="Cerca Film o Serie"
        v-model="searchText"
      />
      <button @click="searchText">Cerca</button>
      <div class="movie" v-for="movie in movies">
        <img src="https://api.themoviedb.org/3/search/movie?" alt="" />
        <div class="description">
          <p class="title"></p>
          <p class="original_title">Il Signore degli anelli</p>
          <p class="language">The lord of the rings</p>
          <p class="vote">10</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>
