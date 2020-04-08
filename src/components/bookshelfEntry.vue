<template>
  <div>
    <b-img
      id="img"
      @click="modalShow = true"
      thumbnail
      fluid
      v-bind:src="book.image"
      alt="Image 1"
    ></b-img>
    <b-modal v-model="modalShow" @ok="handleOK">
      Status: {{ book.status }}
      <br />
      <br />
      Notes:
      <br />
      <b-button v-if="!addNotes" @click="addNotes = !addNotes" variant="info"
        >Add Notes</b-button
      >
      <b-form-textarea
        v-if="addNotes"
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "BookshelfEntry",
  props: ["book"],
  data() {
    return {
      modalShow: false,
      addNotes: false,
    };
  },
  methods: {
    handleOK() {
      console.log(this.book.title);
      this.addNotes = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#img {
  cursor: pointer;
}
</style>
