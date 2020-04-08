<template>
    <div>
      <h1 id='header'>BOOKKEEPER</h1>
    <Search v-on:handle-submit="handleSubmit"/>
    <br/>
    <Books v-on:add-book="addBook" v-bind:books="this.books"/>
    </div>
</template>

<script>
  import Search from '../components/searchBar.vue'
import axios from 'axios'
import keys from '../../config.js'
import Books from '../components/books.vue'
    export default {
       name: 'Home' ,
       components: {
    Search,
    Books
  },
  data() {
    return {
      searchQuery: "",
      books: []
    }
  },
  methods: {
    handleSubmit(search) {
      this.searchQuery = search
      axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: search,
          startIndex: 0,
          maxResults: 40,
          key: keys.google_api_key
        }
      })
      .then(response => {
        console.log(response.data.items)
        this.books = response.data.items
      })
      .catch(error => {
        console.log(error)
      })
    },
    addBook(book) {
      axios.post('http://localhost:3000/books',book)
      .then(response=>{
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
    }
</script>

<style scoped>

</style>