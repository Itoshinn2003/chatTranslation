<script setup lang="ts">
import postBox from '@/components/postBox.vue';

let timelineHeight = "50%";
</script>
<template>
        <div class="opponent-profile">
            <div class="opponent-profile-header">
                <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-image">
                <div class="profile-info">
                    <h3 class="profile-name">いとしん</h3>
                    <span class="profile-id">@itsn39</span>
                    <p class="profile-bio">一言コメントがここに入ります。趣味や自己紹介など。</p>
                    <p class="follow-number">follow 29 follower 30</p>
                </div>
            </div>
            <postBox :height="timelineHeight"></postBox>
        </div>
</template>