import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Account from "../views/Account.vue";
import Orders from "../views/Orders.vue";
import Calc from "../views/Calc.vue";
import Courier from "../views/Courier.vue";
import Admin from "../views/Admin.vue";
import Registration from "../views/Registration.vue";
import AccountCourier from "../views/AccountCourier.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/calc",
    name: "Calc",
    component: Calc
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration
  },
  {
    path: "/courier",
    name: "Courier",
    component: Courier
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/personal-information",
    name: "AccountCourier",
    component: AccountCourier
  }

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
