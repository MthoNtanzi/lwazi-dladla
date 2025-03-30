import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/About.vue'
import Expertise from '../views/Expertise.vue'
import Projects from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: Home },
    { path: '/about', name: 'AboutPage', component: About },
    { path: '/expertise', name: 'ExpertisePage', component: Expertise },
    { path: '/projects', name: 'ProjectsPage', component: Projects },
  ],
})

export default router
