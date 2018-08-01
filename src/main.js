import Vue from 'nativescript-vue';

// import router from './router';

import store from './store';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
var application = require("application");

new Vue({

  //router,

  store,

  template: `
    <Frame>
      <Page>
      </Page>
    </Frame>
  `
}).$start()
