<template>
  <div>
    <b-container fluid class="p-4 bg-dark">
      BOKKSHEL
      <b-row>
        <b-col>
          <div v-bind:key="book" v-for="book in books">
            <ul class="bookshelf">
              <BookshelfEntry v-bind:book="book" />
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import BookshelfEntry from "../components/bookshelfEntry.vue";
export default {
  name: "Bookshelf",
  components: {
    BookshelfEntry,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    getBooks() {
      axios
        .get("http://localhost:3000/books")
        .then((response) => {
          this.books = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>

<style lang="scss" scoped>
.bookshelf {
  display: flex;
  //   flex-wrap: wrap;
  flex-direction: row;
  //   height: 50em;
}
</style>
