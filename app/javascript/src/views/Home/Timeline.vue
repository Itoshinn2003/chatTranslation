<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import postBox from '@/components/postBox.vue';
import menuBar from '@/components/menuBar.vue';
import { selfPosts, index } from '@/api/post';

let timelineHeight = '90%';
let router = useRouter();
let showProfile = ref(false);
let posts = ref([]) as Ref<postResponse[]>;

index().then((response) => {
    posts.value = response;
})



function showOpponentProfile(id: Number) {
    if (showProfile.value) {
        history.pushState(null, '', '/home/timeline');
        showProfile.value = false;
    } else {
        history.pushState(null, '', '/home/timeline/profile/');
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