<script setup lang="ts">
import { ref, Ref } from 'vue';
import { index, userData, profileResponse, updateProfile } from '@/api/profile';
let name = ref(null) as Ref<string | null>;
let sentence= ref(null) as Ref<string | null>;

let current_user = ref(null) as Ref<profileResponse | null>;
index({id: userData}).then((response) => {
    current_user.value = response
    name.value = current_user.value.name;
    sentence.value = current_user.value.sentence;
})



</script>

<template>
    <div class="home">
        <h2 class="text-center">CHAT-TRANSLATION</h2>
        <form class="py-5">
            <!-- <label class="mb-4">プロフィール画像:<input type="file" accept="image/png, image/jpeg" name="profileImage"/></label> -->
            <label class="mb-4">ユーザーネーム：<input type="text" name="username" v-model="name"></label>
            <label class="mb-4">プロフィール文：<input type="text" name="profileText" v-model="sentence"></label>
            <input type="submit" value="更新" class="d-block" @click.prevent="updateProfile({id: userData, name: name, sentence: sentence})">
        </form>
        <button><router-link to="/home/profile">戻る</router-link></button>
    </div>
</template>

<style>
</style>