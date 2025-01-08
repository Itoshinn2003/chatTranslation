<script setup lang="ts">
import { ref } from 'vue';
import opponentProfile from '@/components/opponentProfile.vue';
import { postResponse } from '@/api/post';
let showProfile = ref(false);

const props = defineProps<{
  height: string;
  posts: postResponse | null;
}>();
function showOpponentProfile() {
    if (showProfile.value) {
        history.pushState(null, '', '/home/timeline');
        showProfile.value = false;
    } else {
        history.pushState(null, '', '/home/timeline/profile/32');
        showProfile.value = true;
    }
}
</script>

<template>
<div class="post-box" :style="{height:props.height}" > 
    <div class="post" v-for="post in posts?.self_posts">
        <div class="post-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="post-user-info">
                <span class="post-username">{{ posts?.current_user.name }}</span>
                <span class="post-handle">@{{ posts?.current_user.user_id }}</span>
                <span class="post-timestamp">{{ post.created_at }}</span>
            </div>
        </div>
        <div class="post-body">
            <p class="post-text">{{ post.text }}</p>
        </div>
    </div>
</div>
<opponentProfile v-if="showProfile"></opponentProfile>
</template>