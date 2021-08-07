/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import App from './components/App.vue';
import VueRouter from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Contact from './components/Contact.vue';
import Services from './components/Services.vue';

//import axios from 'axios';

Vue.use(VueRouter);
//Vue.use(axios);

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Dashboard
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'services',
        path: '/services',
        component: Services
    }
]


const router = new VueRouter({
    mode: 'history',
    routes: routes,
});
 

const app = new Vue({
	router: router,
    el: '#app',
    render: h => h(App),
});
