<template>
   <div class="col-sm-4 col-sm-offset-4">
     <h2>Sign Up</h2>
     <p>Please Sign Up to see secret quotes.</p>
     <div class="alert alert-danger" v-if="error">
       <p>{{ error }}</p>
     </div>
     <div class="form-group">
       <input
         type="text"
         class="form-control"
         placeholder="Enter your username"
         v-model="signup_info.username"
       >
     </div>
     <div class="form-group">
       <input
         type="password"
         class="form-control"
         placeholder="Enter your password"
         v-model="signup_info.password"
       >
     </div>
     <div class="form-group">
       <input
         type="text"
         class="form-control"
         placeholder="List your departments, separated by a comma"
         v-model="signup_info.departments"
       >
     </div>
     <button class="btn btn-primary" @click="submit()">Access</button>
   </div>
 </template>

 <script>
  import auth from '../auth'
  export default {
    data() {
      return {
        signup_info: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit() {
        var signup_info = {
          username: this.signup_info.username,
          password: this.signup_info.password,
	  departments: this.signup_info.departments.split(',')
        }

        auth.login_or_signup('signup', this, signup_info, 'list')
      }
    }
  }
 </script>
