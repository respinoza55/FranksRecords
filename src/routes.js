import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from './views/Create.vue'
import Home from './views/Home.vue'
import Search from './views/Search'
import Customer from './views/Customer'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },  
    {
      path: "/customer/:id",
      name: "customer-details",
      component: Customer
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },

    {
      path: "/search",
      name: "search",
      component: Search
    }
  ]
})