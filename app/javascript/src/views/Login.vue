<script setup lang="ts">
import {formData, errors } from '@/api/signin';
import axios from 'axios';
import { useRouter } from 'vue-router';
let router = useRouter();
import { userStore } from '@/store/user';
let Store = userStore();
// tsファイルでrouter使えなかったからこちらに書く
const signIn = async(params: typeof formData ) => {
    try {
        const response = await axios.post('/api/session/create', params);
        window.sessionStorage.setItem('id',response.data.user.id);
        Store.getUserData();
        router.push({ name: 'Profile' })
    } catch (error: any) {
        errors.value = error.response.data.error
    }
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
        <input type='submit' value="ログイン" class="login-btn" @click.prevent="signIn(formData)">
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
