<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li v-if="!user.authenticated">
	    <router-link to="/search">Search</router-link>
	  </li>
          <li v-if="!user.authenticated">
	    <router-link to="/list">List</router-link>
	  </li>
          <li v-if="!user.authenticated">
	    <router-link to="/login">Login</router-link>
	  </li>
          <li v-if="!user.authenticated">
	    <router-link to="/signup">Sign Up</router-link>
	  </li>
          <li v-if="user.authenticated">
	    <router-link to="/personal">Personal info</router-link>
	  </li>
          <li v-if="user.authenticated" @click="logout()">
	    <router-link to="/login">Logout</router-link>
	  </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import auth from '../auth' 
  export default {
    data() {
      return {
        user: auth.user
      }
    },
    methods: {
      logout() {
        auth.logout()
      }
    }
  }
</script>
