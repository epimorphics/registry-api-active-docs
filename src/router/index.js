import Vue from 'vue';
import Router from 'vue-router';
import ActiveApiDoc from '@/components/ActiveApiDoc';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ActiveApiDoc',
      component: ActiveApiDoc,
    },
  ],
});
