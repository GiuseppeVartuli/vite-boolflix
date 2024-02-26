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
      series: [],
      searchText: "",
      store,
      movie: {},
    };
  },

  methods: {
    searchMovies() {
      console.log("searchFilms chiamato");
      console.log(this.searchText);

      const text = this.searchText.split(" ");
      const titlePlus = text.join("+");
      console.log(titlePlus);
      const urlBoolflix = `${store.api_movie_url}api_key=${store.api_key}&query=${titlePlus}`;
      console.log(urlBoolflix);

      axios
        .get(urlBoolflix)
        .then((response) => {
          this.movies = response.data.results;
          console.log(this.movies);
        })
        .catch((error) => {
          console.error("Errore nella richiesta:", error);
        });
    },
    searchSeries() {
      console.log("searchSeries chiamato");
      console.log(this.searchText);

      const text = this.searchText.split(" ");
      const titlePlus = text.join("+");
      console.log(titlePlus);
      const urlBoolflix = `${store.api_series_url}api_key=${store.api_key}&query=${titlePlus}`;
      console.log(urlBoolflix);

      axios
        .get(urlBoolflix)
        .then((response) => {
          this.series = response.data.results;
          console.log(this.series);
        })
        .catch((error) => {
          console.error("Errore nella richiesta:", error);
        });
    },
    searchAll() {
      this.searchMovies();
      this.searchSeries();
    },
    starsVote(vote_average) {
      const stars = vote_average / 2;
      // console.log(stars);
      return Math.ceil(stars);
    },
    starsClass(index, voteAverage) {
      return {
        gold: index <= this.starsVote(voteAverage),
      };
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
      <button @click="searchAll">Cerca</button>
      <h1>Film</h1>
      <div class="movie" v-for="movie in movies">
        <img :src="`${store.api_img_url}w200${movie.poster_path}`" alt="" />
        <div class="description">
          <p class="title">{{ movie.title }}</p>
          <p class="original_title">{{ movie.original_title }}</p>
          <p class="language">{{ movie.original_language }}</p>
          <div v-if="movie">
            <div v-if="movie">
              <div v-for="index in 5" :key="index">
                <i
                  class="fas fa-star"
                  :class="starsClass(index, movie.vote_average)"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Serie</h1>
      <div class="series" v-for="serieItem in series">
        <img :src="`${store.api_img_url}w200${serieItem.poster_path}`" alt="" />
        <div class="description">
          <p class="title">{{ serieItem.title }}</p>
          <p class="original_title">{{ serieItem.original_title }}</p>
          <p class="language">{{ serieItem.original_language }}</p>
          <div v-if="serieItem">
            <div v-for="index in 5" :key="index">
              <i
                class="fas fa-star"
                :class="starsClass(index, serieItem.vote_average)"
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
