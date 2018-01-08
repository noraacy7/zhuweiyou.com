import Vue from 'vue'
import VueRouter from 'vue-router'
import PageIndex from '../page/index'
import Page404 from '../page/404'

Vue.use(VueRouter)

// const asyncPage = name => async resolve => resolve(await import(`../page/${name}.vue`))

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: PageIndex},
    {path: '*', component: Page404}
  ]
})

export default router
