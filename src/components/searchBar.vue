<template>
  <div>
    <b-input-group id="bar">
      <b-form-input
        v-model="query"
        placeholder="search for a book..."
        @keyup.enter="handleSubmit"
      ></b-form-input>
      <b-input-group-append>
        <b-button @click="handleSubmit">Go!</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import EventBus from "../eventBus.js";
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    handleSubmit() {
      let search = this.query;
      this.$store.dispatch("fetchBooks", search);
      // this.$emit("handle-submit");
    },
  },
  mounted() {
    EventBus.$on("reset-search", () => {
      this.query = "";
    });
  },
};
</script>

<style scoped>
#bar {
  width: 30em;
  /* display: block; */
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 23em */
}
</style>
