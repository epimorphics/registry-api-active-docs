// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import locale from 'element-ui/lib/locale/lang/en';

import App from './App';
import router from './router';
import store from './store/index';

import OptionsSwitchCompact from './components/OptionsSwitchCompact';

// plugins
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

// global components
Vue.component('options-switch-compact', OptionsSwitchCompact);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
