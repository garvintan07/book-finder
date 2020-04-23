<template>
  <div>
    <Search />
    <br />
    <div v-if="$store.state.loading" class="d-flex justify-content-center mb-3">
      <b-spinner
        style="width: 3rem; height: 3rem;"
        label="Large Spinner"
      ></b-spinner>
    </div>
    <div
      v-if="$store.state.books.length === 0 && Object.keys(quote).length !== 0"
    >
      <br />
      <b-jumbotron id="quote">
        <template v-slot:lead> "{{ quote.quote }}" </template>
        <hr class="my-4" />
        <p>
          {{ quote.author }}
        </p>
      </b-jumbotron>
    </div>
    <Books v-on:add-book="addBook" v-bind:books="this.books" />
  </div>
</template>

<script>
import Search from "../components/searchBar.vue";
import axios from "axios";
import EventBus from "../eventBus.js";
// import keys from "../../config.js";
import Books from "../components/books.vue";
export default {
  name: "Home",
  components: {
    Search,
    Books,
  },
  data() {
    return {
      quote: {},
    };
  },
  methods: {
    addBook(book) {
      axios
        .post("http://localhost:3000/books", book)
        .then((response) => {
          console.log(response);
          this.makeToast("success");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getQuote() {
      let tags = ["books", "writing", "literature", "knowledge"];
      let index = Math.floor(Math.random() * 4);
      let quoteIndex = Math.floor(Math.random() * 30);
      axios
        .get(`https://goodquotesapi.herokuapp.com/tag/${tags[index]}`)
        .then((response) => {
          let quote = response.data.quotes[quoteIndex];
          this.quote = {
            quote: quote.quote,
            author: quote.author,
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
    makeToast(variant = null) {
      this.$bvToast.toast("Added to bookshelf!", {
        variant: variant,
        solid: true,
      });
    },
  },
  mounted() {
    this.getQuote();
    EventBus.$on("reset-search", () => {
      this.getQuote();
    });
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>

<style scoped>
#quote {
  width: 35em;
  margin: auto;
}
</style>
