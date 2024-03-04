import { reactive } from "vue";

export const store = reactive({
  api_movie_url: "https://api.themoviedb.org/3/search/movie?",
  api_key: "47cdb8689cbe8f286343e7e1d5ceab3f",
  api_img_url: "https://image.tmdb.org/t/p/",
  api_series_url: "https://api.themoviedb.org/3/search/tv?",
  searchText: "",
  movies: [],
  series: [],
});
