import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopOffers from '@/components/TopOffers.vue'
import AboutUs from '@/components/AboutUs.vue'
import ReferencesSec from '@/components/ReferencesSec.vue'
import OurTeam from '@/components/OurTeam.vue'
import SearchOffersView from '@/views/SearchOffersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/top-offers',
      name: 'top-offers',
      component: TopOffers,
    },
    {
      path: '/search-in-offers',
      name: 'search-in-offers',
      component: SearchOffersView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs,
    },
    {
      path: '/references',
      name: 'references',
      component: ReferencesSec,
    },
    {
      path: '/our-team',
      name: 'our-team',
      component: OurTeam,
    },
   
  ],
})

export default router
