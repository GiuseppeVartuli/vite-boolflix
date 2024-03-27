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
  
  <div class="container">
    <h1>Film: {{ store.movies.length }}</h1>
    <div class="row">
      <div class="col-3" v-for="movie in store.movies" >
        <div class="card">
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
            <div class="overlay">
              <div class="description">
                <p class="title" v-if="movie.title !== movie.original_title">
                  {{ movie.title }}
                </p>
                <p class="title-unvailable" v-else-if="!movie.title">
                  Titolo non disponibile
                </p>
                <p class="original_title">{{ movie.original_title }}</p>
                <p class="language">
                  <div class="category">Produzione:
                  <span
                    class="flag-icon"
                    :class="store.getLanguageFlagClass(movie.original_language)"
                  ></span>
                </div>
                </p>
                <div v-if="movie">
                  <div class="category">
                    Voto:
                    <div v-for="index in 5" :key="index">
                      <i
                        class="fas fa-star stars"
                        :class="store.starsClass(index, movie.vote_average)"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="overview" v-if="movie.overview">
                  <div class="category">Trama:</div>
                  <div>{{ movie.overview }}</div>
                </div>
                <div v-else>Overview: Nessuna descrizione trovata</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.category {
  display: flex;
  margin: 15px 0;
}
.flag-icon {
  margin-left: 5px;
}
.overview {
  display: flex;
  max-width: 340px;
  word-wrap: break-word;
}
.stars {
  margin-left: 5px;
}
</style>
