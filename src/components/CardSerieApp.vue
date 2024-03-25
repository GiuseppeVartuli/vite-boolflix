<script>
import { store } from "../store";
export default {
  name: "CardSerieApp",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h1>Serie</h1>
  <div v-if="store.series.length > 0">
    <div class="series" v-for="serieItem in store.series">
      <img
        :src="
          serieItem.poster_path
            ? `${store.api_img_url}w342${serieItem.poster_path}`
            : 'https://timescineplex.com/times/img/no-poster.png'
        "
        alt=""
      />
      <div class="description">
        <p class="title" v-if="serieItem.title !== serieItem.original_title">
          {{ serieItem.title }}
        </p>
        <p class="title" v-else-if="!serieItem.title">Titolo non disponibile</p>
        <p class="original_title">
          {{ serieItem.original_title }}
        </p>
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
  <div v-else-if="store.noResultsFound">
    <p>Nessun risultato trovato</p>
  </div>
</template>

<style scoped>
img {
  width: 342px;
}
</style>
