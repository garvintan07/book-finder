<template>
  <div id="books">
    <div v-bind:key="book" v-for="book in books">
      <BookEntry v-on="$listeners" v-bind:book="book" />
      <br />
    </div>
  </div>
</template>

<script>
import BookEntry from "./bookEntry.vue";
export default {
  name: "Books",
  props: ["books"],
  components: {
    BookEntry,
  },
};
</script>

<style scoped>
#books {
  padding-left: 5em;
  display: flex;
  flex-wrap: wrap;
}
</style>
