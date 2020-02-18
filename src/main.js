import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import "./registerServiceWorker";

Vue.use(ElementUI);
Vue.config.productionTip = false;
const configOptions = {
  apiKey: "AIzaSyAeWe9wCeVYz592l-PfeXIQHFv3gf1PWLo",
  authDomain: "book-shelf-4ef4f.firebaseapp.com",
  databaseURL: "https://book-shelf-4ef4f.firebaseio.com",
  projectId: "book-shelf-4ef4f",
  storageBucket: "book-shelf-4ef4f.appspot.com",
  messagingSenderId: "997897005504",
  appId: "1:997897005504:web:894157005c06f229214025",
  measurementId: "G-7VFKE8RF9E"
};

firebase.initializeApp(configOptions);
firebase.analytics();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");