import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/HomeView.vue'
import ArtistBooksView from '../views/ArtistBooksView.vue'
import BioView from '../views/BioView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import IntermediaView from '../views/IntermediaView.vue'
import PaintingView from '../views/PaintingView.vue'
import PrintmakingView from '../views/PaintingView.vue'
import ResumeView from '../views/ResumeView.vue'
import StatementView from '../views/StatementView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/artistbooks',
    name: 'artistbooks',
    component: ArtistBooksView
  },
  {
    path: '/bio',
    name: 'bio',
    component: BioView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/intermedia',
    name: 'intermediaView',
    component: IntermediaView
  },
  {
    path: '/painting',
    name: 'painting',
    component: PaintingView
  },
  {
    path: '/printmaking',
    name: 'printmaking',
    component: PrintmakingView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  {
    path: '/statement',
    name: 'statement',
    component: StatementView
  },
]

const router = new VueRouter({
  routes
})

export default router
