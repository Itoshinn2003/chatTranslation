<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import postBox from '@/components/postBox.vue';
import menuBar from '@/components/menuBar.vue';
import { selfPosts, postResponse, index } from '@/api/post';

let timelineHeight = '90%';
let router = useRouter();
let showProfile = ref(false);
let posts = ref([]) as Ref<postResponse[]>;

index().then((response) => {
    posts.value = response;
    console.log(posts.value)
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
</script>

<template>
    <div class="home">
    <h2 class="text-center">CHAT-TRANSLATION</h2>
    <postBox :height=timelineHeight :posts=posts></postBox>
    <menuBar></menuBar>
    </div>
</template>

<style>
.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>