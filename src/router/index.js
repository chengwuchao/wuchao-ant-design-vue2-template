import Vue from 'vue';
import Router from 'vue-router';
import config from './router.config';

Vue.use(Router);

export default new Router({
  routes: [...config],
});
