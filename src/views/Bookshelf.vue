<template>
    <div>
      {{ this.books[0] }}
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Bookshelf',
        data () {
            return {
                books:[]
            }
        },
        methods: {
            getBooks() {
              axios.get('http://localhost:3000/books')
              .then(response => {
                  this.books = response.data
              })
              .catch(error => {
                  console.log(error)
              })
            }
        },
        mounted() {
            this.getBooks()
        }
    }
</script>

<style lang="scss" scoped>

</style>