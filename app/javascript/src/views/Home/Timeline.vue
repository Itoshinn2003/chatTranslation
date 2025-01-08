<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import postBox from '@/components/postBox.vue';
import menuBar from '@/components/menuBar.vue';

let timelineHeight = '90%';
let router = useRouter();
let showProfile = ref(false);

function tabChange(tabName: string) {
  if (tabName === 'Timeline') {
    router.push({ name: 'Timeline' });
  } else if (tabName === 'Message') {
    router.push({ name: 'Message' });
  } else if (tabName === 'Profile') {
    router.push({ name: 'Profile' });
  }
}

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
    <postBox :height=timelineHeight></postBox>
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