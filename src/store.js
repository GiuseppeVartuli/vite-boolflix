import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  api_movie_url: "https://api.themoviedb.org/3/search/movie?",
  api_key: "47cdb8689cbe8f286343e7e1d5ceab3f",
  api_img_url: "https://image.tmdb.org/t/p/",
  api_series_url: "https://api.themoviedb.org/3/search/tv?",
  searchText: "",
  movies: [],
  series: [],

  // ricerca film
  searchMovies() {
    // console.log("searchFilms chiamato");
    console.log(this.searchText);

    const text = this.searchText.split(" ");
    const titlePlus = text.join("+");
    console.log(titlePlus);
    const urlBoolflix = `${store.api_movie_url}api_key=${store.api_key}&query=${titlePlus}`;
    console.log(urlBoolflix);

    axios
      .get(urlBoolflix)
      .then((response) => {
        this.movies = response.data.results;
        console.log(this.movies);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  },

  // ricerca serie TV

  searchSeries() {
    console.log("searchSeries chiamato");
    console.log(this.searchText);

    const text = this.searchText.split(" ");
    const titlePlus = text.join("+");
    console.log(titlePlus);
    const urlBoolflix = `${store.api_series_url}api_key=${store.api_key}&query=${titlePlus}`;
    console.log(urlBoolflix);

    axios
      .get(urlBoolflix)
      .then((response) => {
        this.series = response.data.results;
        console.log(this.series);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  },

  // ricerca totale

  searchAll() {
    console.log("chiamata arrivata");
    this.searchMovies();
    this.searchSeries();
  },
});
