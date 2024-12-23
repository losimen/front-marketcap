import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import Currencies from './pages/Currencies.vue'


const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/currencies/:id', component: Currencies, name: 'currencies'},
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
