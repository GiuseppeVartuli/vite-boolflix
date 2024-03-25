<script>
import { store } from "../store";
import CardMovieApp from "./CardMovieApp.vue";
import CardSerieApp from "./CardSerieApp.vue";
export default {
  name: "MainApp",
  components: {
    CardMovieApp,
    CardSerieApp,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <CardMovieApp></CardMovieApp>
    <CardSerieApp></CardSerieApp>
  </main>
</template>

<style></style>
