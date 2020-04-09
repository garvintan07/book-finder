<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-container>
          <b-navbar-brand href="#">
            <router-link @click.native="reset" id="home" to="/"
              >BOOKeeper</router-link
            >
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form> </b-nav-form>
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template id="home" slot="button-content"
                  ><em>User</em></template
                >
                <b-dropdown-item href="#">
                  <router-link id="user" to="/">Home</router-link>
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <router-link id="user" to="/user">Profile</router-link>
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <router-link id="user" to="/bookshelf"
                    >My Bookshelf</router-link
                  >
                </b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Search from './components/searchBar.vue'
// import axios from 'axios'
// import keys from '../config.js'
// import Books from './components/books.vue'
// import NavBar from './components/navBar.vue'
import EventBus from "./eventBus.js";

export default {
  name: "App",
  methods: {
    reset() {
      this.$store.commit("RESET");
      EventBus.$emit("reset-search");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#home {
  color: white;
}
#user {
  color: black;
}
#header {
  padding-bottom: 1em;
}
</style>
