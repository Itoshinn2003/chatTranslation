<script setup lang="ts">
import { useRouter } from 'vue-router';
import { signUp, formData } from '@/api/signup';
let router = useRouter();
function routedummy() {
    router.push({ name: 'Timeline' })
}
function onSubmit() {
    if (typeof formData.user_id === 'string' && typeof formData.password === 'string' && typeof formData.name === 'string' && typeof formData.language === 'string') {
        if (formData.user_id.length <= 20 && formData.password.length <= 20 && formData.name.length <=20) {
            signUp(formData)
        }
    }
}

</script>
<template>
    <form class="mx-auto sign-up p-5">
        <h1 class="mb-3">新規登録</h1>
        <div class="mb-4">
            <p>ID</p>
            <input type="text" class="stylish-input" placeholder="Your ID" name="user_id" v-model="formData.user_id">
        </div>
        <div class="mb-4">
            <p>Password</p>
            <input type="password" class="stylish-input" placeholder="Your PASSWORD" name="password" v-model="formData.password">
        </div>
        <div class="mb-4">
            <p>Name</p>
            <input type="text" class="stylish-input" placeholder="Your Name" name="name" v-model="formData.name">
        </div>
        <div class="mb-4">
            <p>Language</p>
            <select name="language" class="stylish-input" v-model="formData.language">
                <option value="japanese">日本語</option>
                <option value="english">English</option>
            </select>
        </div>
        <input type='submit' value="登録" class="signin-btn mb-4" @click.prevent="onSubmit()">
        <a @click="routedummy()">ログインに進む</a>
    </form>
</template>

<style scoped>
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
a {
    font-size:14px;
    display:block;
}
</style>
