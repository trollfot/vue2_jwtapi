<template lang="html">
  <div class="col-sm-6 col-sm-offset-3">
      <h1>Query your personal information</h1>
      <button class="btn btn-warning" v-on:click="getQuote()">Query</button>
      <div class="quote-area" v-if="quote">
        <h2><blockquote>{{ quote }}</blockquote></h2>
      </div>
    </div>
</template>

<script>
import auth from '../auth'
import axios from 'axios'
export default {
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    getQuote() {
      axios.get('http://localhost:7001/users/personal', {
        headers: auth.getAuthHeader()
      })
        .then((response) => {
          this.quote = response.data;
        })
        .catch((err) => { console.log(err) })
    }
  },
  route: {
    beforeEnter() {
      return auth.user.authenticated;
    }
  }
}
</script>

<style lang="css">
</style>
