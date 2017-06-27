// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable import/first */
import 'element-ui/lib/theme-default/index.css';
import './styles/element-gds.scss';

import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

import 'vue-awesome/icons';
import FontAwesomeIcon from 'vue-awesome/components/Icon';
import VueCodeMirror from 'vue-codemirror';

import App from './App';
import router from './router';
import store from './store/index';

import OptionsSwitchCompact from './components/OptionsSwitchCompact';

// plugins
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(VueCodeMirror);

// global components
Vue.component('options-switch-compact', OptionsSwitchCompact);
Vue.component('icon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
