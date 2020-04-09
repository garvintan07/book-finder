<template>
  <div v-on:reset="reset">
    <Search />
    <br />
    <div v-if="$store.state.loading" class="d-flex justify-content-center mb-3">
      <b-spinner
        style="width: 3rem; height: 3rem;"
        label="Large Spinner"
      ></b-spinner>
    </div>
    <Books v-on:add-book="addBook" v-bind:books="this.books" />
  </div>
</template>

<script>
import Search from "../components/searchBar.vue";
import axios from "axios";
// import keys from "../../config.js";
import Books from "../components/books.vue";
export default {
  name: "Home",
  components: {
    Search,
    Books,
  },
  methods: {
    addBook(book) {
      axios
        .post("http://localhost:3000/books", book)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    reset() {
      console.log("this worked");
    },
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>

<style scoped></style>
