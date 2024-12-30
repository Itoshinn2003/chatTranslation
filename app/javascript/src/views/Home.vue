<script setup lang="ts">
import { ref } from 'vue';
import Timeline from '@/components/HomeTimeline.vue';
import Message from '@/components/HomeMessage.vue';
import Profile from '@/components/HomeProfile.vue';

let currentTab = ref(Timeline);

function tabChange(tabName: string) {
  if (tabName === 'Timeline') {
    currentTab.value = Timeline;
  } else if (tabName === 'Message') {
    currentTab.value = Message;
  } else if (tabName === 'Profile') {
    currentTab.value = Profile;
  }
}
</script>

<template>
    <div class="home">
        <component :is="currentTab"/>
    <menuBar></menuBar>
    </div>
</template>

<style>
.bar-list {
    width:100%;
    display:flex;
    text-align:center;
    justify-content:space-around;
    border-top:1px solid #228B22;
    padding:10px 0;
    background-color:white;
}

</style>