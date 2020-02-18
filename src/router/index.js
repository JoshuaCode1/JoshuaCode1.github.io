import Vue from "vue";

import Vuikit from "vuikit";
import VuikitIcons from "@vuikit/icons";

import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Mapview from "../views/Mapview.vue";

import "@vuikit/theme";

Vue.use(VueRouter);
Vue.use(Vuikit);
Vue.use(VuikitIcons);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/mapview",
    name: "Mapview",
    component: Mapview
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
