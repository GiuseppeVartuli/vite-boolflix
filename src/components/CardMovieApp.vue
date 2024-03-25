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
  <div class="container">
    <div class="row">
      <div class="col-3" v-for="movie in store.series">
        <div class="card">
          <div v-if="store.series.length > 0">
            <div class="poster">
              <img
                class="no-poster"
                :src="
                  movie.poster_path
                    ? `${store.api_img_url}w342${movie.poster_path}`
                    : 'https://timescineplex.com/times/img/no-poster.png'
                "
                alt=""
              />
            </div>

            <div class="description">
              <p class="title" v-if="movie.title !== movie.original_title">
                {{ movie.title }}
              </p>
              <p class="title-unvailable" v-else-if="!movie.title">
                Titolo non disponibile
              </p>
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
          <div v-else-if="store.noResultsFound">
            <p>Nessun risultato trovato</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
