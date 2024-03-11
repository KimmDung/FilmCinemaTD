import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ChooseSeat from '../components/ChooseSeat.vue';
import Purchase from '../components/Purchase.vue';



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/',  name: 'home', component: Home, },  
        { path: '/chooseseat', name: 'chooseseat', component: ChooseSeat, },
        { path: '/purchase', name: 'purchase', component: Purchase, },
    ]
})

export default router
