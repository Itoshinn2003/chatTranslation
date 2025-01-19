<script setup lang="ts">
import { index } from '@/api/post';
import { ref, Ref } from 'vue';
const props = defineProps<{
    user: null | userResponse;
}>();
import postBox from '@/components/postBox.vue';
let posts = ref([]) as Ref<postResponse[]>;


index({id: props.user?.id}).then((response) => {
    posts.value = response;
})
let timelineHeight = "60%";
</script>
<template>
        <div class="opponent-profile">
            <div class="opponent-profile-header">
                <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-image">
                <div class="profile-info">
                    <h3 class="profile-name">{{ user?.name }}</h3>
                    <span class="profile-id">@{{ user?.user_id }}</span>
                    <p class="profile-bio">{{ user?.sentence }}</p>
                    <p class="follow-number">follow 29 follower 30</p>
                </div>
            </div>
            <postBox :height="timelineHeight" :posts="posts"></postBox>
        </div>
</template>

<style>
.opponent-profile {
    background-color:white;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    width:80%;
    border: 1px solid rgb(169, 169, 169);
    padding: 30px;
    border-radius: 10px;
}
.opponent-profile-header {
    display: flex;
    align-items: center;
    border-bottom:1px solid rgb(95, 95, 95);
}
</style>