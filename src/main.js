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

// Sentry.io monitoring
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

import App from './App';
import router from './router';
import store from './store/index';

import OptionsSwitchCompact from './components/OptionsSwitchCompact';

// configure Sentry.io
Raven
    .config('https://f911714b8c4748dc9409505250557384@sentry.io/190336')
    .addPlugin(RavenVue, Vue)
    .install();

// Vue plugins
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
