<template>
     <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-container>
            <b-navbar-brand href="#">
                <router-link id="home" to="/">Home</router-link>
            </b-navbar-brand>
             
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-form>
                 
                </b-nav-form>
                <b-nav-item-dropdown right>
                  <!-- Using 'button-content' slot -->
                  <template slot="button-content"><em>User</em></template>
                  <b-dropdown-item href="#">
                <router-link id="user" to="/user">Profile</router-link>

                  </b-dropdown-item>
                  <b-dropdown-item href="#">My Bookshelf</b-dropdown-item>
                  <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
      </b-navbar>
    </div>  
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
  #home {
      color: white;
  }
  #user {
      color: black;
  }
</style>