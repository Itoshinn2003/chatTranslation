import { createRouter, createWebHashHistory } from 'vue-router';
import SignUp from '@/views/SignUp.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path:'/home',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    // createWebHashHistoryはサーバーでURLを指定する必要がなくなる
    routes
})

export default router