import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Fav from "../views/Favoritas.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect:"/home"
  },
  {
    path: '/home/:page?',
    name: 'home',
    component: Home
  },
  {
    path: "/favoritas",
    name: "favoritas",
    component: Fav
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/details/:id?",
    name: "details",
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
