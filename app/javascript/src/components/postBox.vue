<script setup lang="ts">
import { ref, Ref } from 'vue';
import opponentProfile from '@/components/opponentProfile.vue';
import { show } from '@/api/profile';
import { userInfo } from 'os';
let showProfile = ref(false);
let user = ref(null) as Ref<null | userResponse>;
const props = defineProps<{
  height: string;
  posts: postResponse[];
}>();
function showOpponentProfile(id: number) {
    if (showProfile.value) {
        history.pushState(null, '', '/home/timeline');
        showProfile.value = false;
    } else {
        show({id: id}).then((response) => {
            user.value = response;
            history.pushState(null, '', `/home/timeline/profile/${id}`);
            showProfile.value = true;
        })
    }
}
</script>

<template>
<div class="post-box" :style="{height:props.height}" > 
    <div class="post" v-for="post in posts">
        <div class="post-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img" @click="showOpponentProfile(post.user.id)">
            <div class="post-user-info">
                <span class="post-username">{{ post.user.name }}</span>
                <span class="post-handle">@{{ post.user.user_id }}</span>
                <span class="post-timestamp">{{ post.created_at }}</span>
            </div>
        </div>
        <div class="post-body">
            <p class="post-text">{{ post.text }}</p>
        </div>
    </div>
</div>
<opponentProfile v-if="showProfile" :user="user"></opponentProfile>
</template>