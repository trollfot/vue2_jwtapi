<template lang="html">
  <div class="col-sm-6 col-sm-offset-3">
      <h1>Look for a user</h1>
      <div class="form-group">
	<input
            type="text"
            class="form-control"
            placeholder="Enter the username you're looking for"
            v-model="userLookup.username"
	    />
      </div>
      <button class="btn btn-primary" @click="searchUser()">Search</button>
      <div class="user-area" v-if="user">
        <p>{{ user }}</p>
      </div>
      <div class="error-area" v-if="error">
        <p>{{ error }}</p>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        userLookup: {
          username: ''
        },
	user: '',
	error: ''
    }
  },
  methods: {
    searchUser() {
      var userLookup = {
         username: this.userLookup.username
      }
      axios.get(
        'http://localhost:7001/users/details', {params: userLookup}
	).then((response) => {
	    this.error = '';
            this.user = response.data;
	  }).catch((err) => {
	  console.log(err);
	  this.user = '';
	  this.error = "Couldn't find the user"
	  })
    }
  }
}
</script>

<style lang="css">
</style>
