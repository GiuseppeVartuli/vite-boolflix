<script>
import CardsApp from "./components/CardsApp.vue";
import SearchApp from "./components/SearchApp.vue";
import { store } from "./store.js";
import axios from "axios";
export default {
  name: "App",

  components: {
    CardsApp,
    SearchApp,
  },
  data() {
    return {
      movies: [],
      searchText: "",
      store,
    };
  },
  computed: {},
  methods: {
    searchFilms() {
      console.log("searchFilms chiamato");
      console.log(this.searchText);

      const text = this.searchText.split(" ");
      const titlePlus = text.join("+");
      console.log(titlePlus);
      const urlMovie = `${store.api_movie_url}api_key=${store.api_key}&query=${titlePlus}`;
      console.log(urlMovie);

      axios
        .get(urlMovie)
        .then((response) => {
          this.movies = response.data.results;
          console.log(this.movies);
        })
        .catch((error) => {
          console.error("Errore nella richiesta:", error);
        });
    },
  },
  mounted() {
    console.log(store.api_movie_url.length);
    console.log(store.api_movie_url);
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
      <button @click="searchFilms">Cerca</button>
      <div class="movie" v-for="movie in movies">
        <img :src="`${store.api_img_url}w200${movie.poster_path}`" alt="" />
        <div class="description">
          <p class="title">{{ movie.title }}</p>
          <p class="original_title">{{ movie.original_title }}</p>
          <p class="language">{{ movie.original_language }}</p>
          <p class="vote">{{ movie.vote_average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
