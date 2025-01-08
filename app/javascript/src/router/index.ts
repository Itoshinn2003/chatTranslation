import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '@/views/SignUp.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Message from '@/views/Home/Message.vue'
import Profile from '@/views/Home/Profile.vue'
import Timeline from '@/views/Home/Timeline.vue'
import createPost from '@/views/Home/createPost.vue'
import Chat from '@/views/Chat.vue'
import ProfileEdit from '@/views/ProfileEdit.vue'


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
        path:'/home/createPost',
        name: 'createPost',
        component: createPost
    },
    {
        path:'/home/Profile',
        name: 'Profile',
        component: Profile
    },
    { 
        path:'/home/profile/edit',
        name: 'ProfileEdit',
        component: ProfileEdit
    },
    {
        path:'/home/message/10',
        name: 'Chat',
        component: Chat
    }

]

const router = createRouter({
    history: createWebHistory(),
    // createWebHashHistoryとcreateWebHistoryの違いを調べる
    routes
})

export default router