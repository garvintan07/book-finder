<template>
  <div id="book">
    <b-card id="card" no-body style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            v-bind:src="book.volumeInfo.imageLinks.smallThumbnail"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <div id="body">
            <b-card-body v-bind:title="book.volumeInfo.title">
              <b-card-text>
                Author: {{ book.volumeInfo.authors[0] }}
                <br />
                Publisher: {{ book.volumeInfo.publisher }}
                <br />
                Published: {{ book.volumeInfo.publishedDate }}
                <br />
              </b-card-text>
              <button>Buy!</button>
              <br />
              <button @click="addBook">Add to bookshelf</button>
            </b-card-body>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "BookEntry",
  props: ["book"],
  methods: {
    addBook() {
      let bookInfo = {
        title: this.book.volumeInfo.title,
        author: this.book.volumeInfo.authors[0],
        publisher: this.book.volumeInfo.publisher,
        date: this.book.volumeInfo.publishedDate,
        status: "not started",
        image: this.book.volumeInfo.imageLinks.smallThumbnail,
      };
      this.$emit("add-book", bookInfo);
    },
  },
};
</script>

<style scoped>
#book {
  width: 35em;
  height: 18em;
  margin-left: auto;
  margin-right: auto;
  overflow-y: hidden;
  overflow: scroll;
}
#card {
  height: 25em;
  /* overflow: scroll; */
}

img {
  margin-top: 3em;
  width: 7em;
  height: 10em;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
