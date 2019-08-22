require('./bootstrap');

window.Vue = require('vue');

Vue.component('app', require('./components/AppComponent.vue'));
Vue.component('posts', require('./components/PostsComponent.vue'));
Vue.component('InfiniteLoading', require('vue-infinite-loading'));

import router from './routes'

const app = new Vue({
    el: '#app',
    router
});
