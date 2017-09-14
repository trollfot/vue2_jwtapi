import { router } from '../index';
import axios from 'axios'

const API_URL = 'http://localhost:7001/'
const LOGIN_URL = API_URL + 'jwt/login'
const SIGNUP_URL = API_URL + 'users/signup'


export default {
    user: {
	authenticated: false
    },

    signup(context, info, redirect) {
	axios.post(SIGNUP_URL, info)
	    .then((response) => {
		console.log(response.data);
		if(redirect) {
		    router.push(redirect)
		}
	    }).catch((err) => {
		context.error = err.response.data
	    })
    },

    login(context, creds, redirect) {
	axios.post(LOGIN_URL, creds)
	    .then((response) => {
		console.log(response.data);
		localStorage.setItem('token', response.data.token)

		this.user.authenticated = true

		if(redirect) {
		    router.push(redirect)
		}
	    }).catch((err) => {
		context.error = err.response.data
	    })
    },

    logout() {
	localStorage.removeItem('token')
	this.user.authenticated = false
    },

    checkAuth() {
	var jwt = localStorage.getItem('token')
	if(jwt) {
	    this.user.authenticated = true
	} else {
	    this.user.authenticated = false
	}
    },

    getAuthHeader() {
	return {
	    'Authorization': 'Bearer ' + localStorage.getItem('token')
	}
    }
}
