import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '@/views/SignUp.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Message from '@/views/Home/Message.vue'
import Profile from '@/views/Home/Profile.vue'
import Timeline from '@/views/Home/Timeline.vue'


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
        path:'/home/timeline',
        name: 'Timeline',
        component: Timeline
    },
    {
        path:'/home/message',
        name: 'Message',
        component: Message
    },
    {
        path:'/home/profile',
        name: 'Profile',
        component: Profile
    }

]

const router = createRouter({
    history: createWebHistory(),
    // createWebHashHistoryとcreateWebHistoryの違いを調べる
    routes
})

export default router