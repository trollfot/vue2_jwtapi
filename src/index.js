import Vue from 'vue';
import App from './components/App.vue';
import Search from './components/Search.vue';
import List from './components/List.vue';
import Personal from './components/Personal.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import VueRouter from 'vue-router';
import auth from './auth'

import axios from 'axios';


// Check the users auth status when the app starts
auth.checkAuth()

Vue.use(VueRouter)

const routes = [
    { path: '/search', component: Search },
    { path: '/list', component: List },
    { path: '/personal', component: Personal },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '*', redirect: '/search' }
]

export const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
