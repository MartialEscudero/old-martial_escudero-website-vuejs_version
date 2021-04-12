import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import('../views/CV.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/CV.vue')
  },
  {
    path: '/a-propos',
    name: 'à propos',
    component: () => import('../views/CV.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/projets',
    name: 'Projets',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/projet/:slug',
    name: 'Projet',
    component: () => import('../views/Projet.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/labo',
    name: 'Labo',
    component: () => import('../views/Labo.vue')
  },
  { 
    path: '/404', 
    name: '404',
    component: () => import('../views/404.vue')
  },
  { 
    path: '*', 
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router