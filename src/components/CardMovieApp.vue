<script>
import { store } from "../store";
export default {
  name: "CardMovieApp",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h1>Film</h1>
  <div v-if="store.movies.length > 0">
    <div class="movie" v-for="movie in store.movies">
      <img
        :src="
          movie.poster_path
            ? `${store.api_img_url}w342${movie.poster_path}`
            : 'https://timescineplex.com/times/img/no-poster.png'
        "
        alt=""
      />
      <div class="description">
        <p class="title" v-if="movie.title !== movie.original_title">
          {{ movie.title }}
        </p>
        <p class="title" v-else-if="!movie.title">Titolo non disponibile</p>
        <p class="original_title">
          {{ movie.original_title }}
        </p>
        <p class="language">
          <span
            class="flag-icon"
            :class="store.getLanguageFlagClass(movie.original_language)"
          ></span>
        </p>
        <div v-if="movie">
          <div v-for="index in 5" :key="index">
            <i
              class="fas fa-star"
              :class="store.starsClass(index, movie.vote_average)"
            ></i>
          </div>
        </div>
        <div class="overview" v-if="movie.overview">
          <div class="category">Overview:</div>
          <div>{{ movie.overview }}</div>
        </div>
        <div v-else>Nessuna descrizione trovata</div>
      </div>
    </div>
  </div>
  <div v-else-if="store.noResultsFound">
    <p>Nessun risultato trovato</p>
  </div>
</template>

<style scoped>
img {
  width: 342px;
}
</style>
