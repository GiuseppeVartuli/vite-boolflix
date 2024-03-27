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

  
  <div class="container">
    <h1>Film: {{ store.series.length }}</h1>
    <div class="row">
      <div class="col-3" v-for="serieItem in store.series" >
        <div class="card">
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
            <div class="overlay">
              <div class="description">
                <p class="title" v-if="serieItem.name !== serieItem.original_name">
                  {{ serieItem.name }}
                </p>
                <p class="title-unvailable" v-else-if="!serieItem.name">
                  Titolo non disponibile
                </p>
                <p class="original_title">{{ serieItem.original_name }}</p>
                <p class="language">
                  <div class="category">Produzione:
                  <span
                    class="flag-icon"
                    :class="store.getLanguageFlagClass(serieItem.original_language)"
                  ></span>
                </div>
                </p>
                <div v-if="serieItem">
                  <div class="category">
                    Voto:
                    <div v-for="index in 5" :key="index">
                      <i
                        class="fas fa-star stars"
                        :class="store.starsClass(index, serieItem.vote_average)"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="overview" v-if="serieItem.overview">
                  <div class="category">Trama:</div>
                  <div>{{ serieItem.overview }}</div>
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
  padding-left: 100px;
}
.poster {
  width: 342px;
  display: flex;
  margin: 60px;
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

.poster {
  position: relative;
}

.poster .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.poster:hover .overlay {
  opacity: 1;
}

.poster .description {
  color: white;
  text-align: center;
  padding: 20px;
  text-align: left;
}
</style>
