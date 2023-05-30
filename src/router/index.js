import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage =>
      import(/* webpackChunkName: "home" */ '../views/HomePage.vue')
   },
   {
    path: '/abt',
    name: 'about',
    component: AboutPage =>
    import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
 },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router

