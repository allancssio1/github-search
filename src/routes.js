import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import Results from './components/Results.vue'

Vue.use(Router)

const routes = [
  {path: "/", name: "home", component: HomePage},
  {path: "/results/:userName", name: "resultsPage", component: Results}
]
const router = new Router({
  mode: 'history',
  routes
})

export default router