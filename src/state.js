import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  api_url:
    "https://api.themoviedb.org/3/movie/550?api_key=47cdb8689cbe8f286343e7e1d5ceab3f",

  getCards(url) {
    axios.get(url).then((response) => console.log(response));
  },
});
