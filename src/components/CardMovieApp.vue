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
  <div class="movie" v-for="movie in store.movies">
    <img :src="`${store.api_img_url}w342${movie.poster_path}`" alt="" />
    <div class="description">
      <p
        class="title"
        v-if="movie.title && movie.title !== movie.original_title"
      >
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
    </div>
  </div>
</template>

<style scoped></style>
