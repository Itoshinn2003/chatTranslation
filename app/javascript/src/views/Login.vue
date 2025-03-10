<script setup lang="ts">
import { ref } from 'vue';
import { formData, signIn } from '@/api/signin';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { userStore } from '@/store/user';
let router = useRouter();
let Store = userStore();
let errors = ref<string[]>([]);

 function handleSignIn() {
    signIn(formData).then((data) => {
        window.sessionStorage.setItem('id',data.user.id);
        Store.getUserData();
        router.push({ name: 'Profile' })
    }).catch((error) => {
        errors.value = error.response.data
    })
 }
</script>

<template>
    <form class="mx-auto login p-5">
        <h1 class="mb-3">ログイン</h1>
        <div class="mb-4">
            <p>ID</p>
            <input type="text" class="stylish-input" placeholder="Your ID" v-model="formData.user_id">
        </div>
        <div class="mb-4">
            <p>Password</p>
            <input type="password" class="stylish-input" placeholder="Your PASSWORD" v-model="formData.password">
        </div>
        <input type='submit' value="ログイン" class="login-btn" @click.prevent="handleSignIn()">
    </form>
</template>

<style>
h1{
    font-size:24px;
    text-align:center;
}
label{
    display: inline-flex;
}
p{
    font-size:20px;
}
</style>
