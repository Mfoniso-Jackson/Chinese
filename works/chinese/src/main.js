import Vue from 'vue';
import App from './App';
import router from './router';

//tobe's global scripts//
import './assets/js/jquery.min';
import './assets/js/bootstrap.min';
import './assets/js/plugins';
import './assets/js/main';

//global css //
import './assets/css/main.css';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
