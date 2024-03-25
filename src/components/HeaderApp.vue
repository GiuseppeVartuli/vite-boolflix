<script>
import { store } from "../store";
import SearchApp from "./SearchApp.vue";
export default {
  name: "HeaderApp",
  components: {
    SearchApp,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <img src="../assets/img/logo-boolflix.png" alt="" />
    </div>
    <SearchApp></SearchApp>
  </header>
</template>

<style></style>
