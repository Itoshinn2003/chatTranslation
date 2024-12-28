<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Timeline from '@/components/HomeTimeline.vue';
import Message from '@/components/HomeMessage.vue';
import Profile from '@/components/HomeProfile.vue';
import opponentProfile from '@/components/opponentProfile.vue';
import postBox from '@/components/postBox.vue';

let timelineHeight = '90%';
let currentTab = ref(Timeline);
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
  
    <div class="menu-bar">
        <ul>
            <li @click="tabChange('Timeline')">TimeLine</li>
            <li @click="tabChange('Message')">Message</li>
            <li @click="tabChange('Profile')">Profile</li>
        </ul>
    </div>
    </div>
</template>

<style>
ul {
    width:100%;
    display:flex;
    text-align:center;
    justify-content:space-around;
    border-top:1px solid #228B22;
    padding:10px 0;
    background-color:white;
}
.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>