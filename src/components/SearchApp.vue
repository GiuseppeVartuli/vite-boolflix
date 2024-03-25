<script>
import { store } from "../store";
export default {
  name: "SearchApp",

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="search">
    <input
      name="searchText"
      type="text"
      placeholder="Cerca Film o Serie"
      v-model="store.searchText"
      @keyup.enter="store.searchAll"
    />
    <button @click="store.searchAll">Cerca</button>
  </div>
</template>

<style></style>
