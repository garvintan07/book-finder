import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import keys from "../../config.js";

Vue.use(Vuex);

const state = {
  books: [],
  query: "",
};

const mutations = {
  GET_BOOKS(state, books) {
    state.books = books;
  },
  RESET() {
    state.books = [];
  },
};

const actions = {
  fetchBooks({ commit }, search) {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: search,
          startIndex: 0,
          maxResults: 40,
          key: keys.google_api_key,
        },
      })
      .then((response) => {
        console.log(keys.google_api_key);
        console.log(response.data.items);
        // this.books = response.data.items;
        commit("GET_BOOKS", response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
