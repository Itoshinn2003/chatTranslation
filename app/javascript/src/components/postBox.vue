<script setup lang="ts">
import { ref } from 'vue';
import opponentProfile from '@/components/opponentProfile.vue';

let showProfile = ref(false);

const props = defineProps({
  height: String
})
function showOpponentProfile() {
    if (showProfile.value) {
        history.pushState(null, '', '/home/timeline');
        showProfile.value = false;
    } else {
        history.pushState(null, '', '/home/timeline/profile/32');
        showProfile.value = true;
    }
}
console.log(props.height)
</script>

<template>
<div class="post-box" :style="{height:props.height}" > 
    <div class="post">
        <div class="post-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img" @click="showOpponentProfile()">
            <div class="post-user-info">
                <span class="post-username">いとしん</span>
                <span class="post-handle">@itsn39</span>
                <span class="post-timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="post-body">
            <p class="post-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="post-user-info">
                <span class="post-username">いとしん</span>
                <span class="post-handle">@itsn39</span>
                <span class="post-timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="post-body">
            <p class="post-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="post-user-info">
                <span class="post-username">いとしん</span>
                <span class="post-handle">@itsn39</span>
                <span class="post-timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="post-body">
            <p class="post-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="post-user-info">
                <span class="post-username">いとしん</span>
                <span class="post-handle">@itsn39</span>
                <span class="post-timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="post-body">
            <p class="post-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="post-user-info">
                <span class="post-username">いとしん</span>
                <span class="post-handle">@itsn39</span>
                <span class="post-timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="post-body">
            <p class="post-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="post-user-info">
                <span class="post-username">いとしん</span>
                <span class="post-handle">@itsn39</span>
                <span class="post-timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="post-body">
            <p class="post-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
</div>
<opponentProfile v-if="showProfile"></opponentProfile>
</template>