<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signUp, formData } from '@/api/signup';
let router = useRouter();
let errors = ref<string[]>([]);

function handleSignUp() {
    signUp(formData).then((data) => {
        router.push({ name: 'Login' })
    }).catch((error) => {
        errors.value = error.response.data
    })
}
</script>
<template>
    <form class="mx-auto sign-up p-5">
        <h1 class="mb-3">新規登録</h1>
        <ul v-if="errors.length != 0">
            <p>エラー内容</p>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="mb-4">
            <p>ID[必須]</p>
            <input type="text" class="stylish-input" placeholder="Your ID" name="user_id" v-model="formData.user_id">
            <span>※20字以内の英数字</span>
        </div>
        <div class="mb-4">
            <p>Password[必須]</p>
            <input type="password" class="stylish-input" placeholder="Your PASSWORD" name="password" v-model="formData.password">
            <span>※8字以上20字以内の英数字</span>
        </div>
        <div class="mb-4">
            <p>Name[必須]</p>
            <input type="text" class="stylish-input" placeholder="Your Name" name="name" v-model="formData.name">
        </div>
        <div class="mb-4">
            <p>Language[必須]</p>
            <select name="language" class="stylish-input" v-model="formData.language">
                <option value="japanese">日本語</option>
                <option value="english">English</option>
            </select>
        </div>
        <input type='submit' value="登録" class="signin-btn mb-4" @click.prevent="handleSignUp()">
        <a @click="router.push({ name: 'Login' })">ログインに進む</a>
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
