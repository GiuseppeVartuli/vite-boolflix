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
  <div class="container">
    <div class="row">
      <div class="col-3" v-for="serieItem in store.series">
        <div class="card">
          <div v-if="store.series.length > 0">
            <div class="poster">
              <img
                class="no-poster"
                :src="
                  serieItem.poster_path
                    ? `${store.api_img_url}w342${serieItem.poster_path}`
                    : 'https://timescineplex.com/times/img/no-poster.png'
                "
                alt=""
              />
            </div>

            <div class="description">
              <p
                class="title"
                v-if="serieItem.title !== serieItem.original_title"
              >
                {{ serieItem.title }}
              </p>
              <p class="title-unvailable" v-else-if="!serieItem.title">
                Titolo non disponibile
              </p>
              <p class="original_title">
                {{ serieItem.original_title }}
              </p>
              <p class="language">
                <span
                  class="flag-icon"
                  :class="
                    store.getLanguageFlagClass(serieItem.original_language)
                  "
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
              <div class="overview" v-if="serieItem.overview">
                <div class="category">Overview:</div>
                <div>{{ serieItem.overview }}</div>
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

<style>
.container {
  width: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  background: gray;
}

.col-3 {
  width: calc(100% / 12 * 3);
}
h1 {
  background: gray;
}
.poster {
  width: 342px;
}
.no-poster {
  width: 342px;
}
.fa-star {
  color: #ccc;
}

.gold {
  color: goldenrod;
}
</style>
