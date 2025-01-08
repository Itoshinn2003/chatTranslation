<script setup lang="ts">

import { useRouter } from 'vue-router';
let router = useRouter();

function tabChange(tabName: string) {
  if (tabName === 'Timeline') {
    router.push({ name: 'Timeline' });
  } else if (tabName === 'Message') {
    router.push({ name: 'Message' });
  } else if (tabName === 'Profile') {
    router.push({ name: 'Profile' });
  } else if (tabName === 'createPost') {
    router.push({ name: 'createPost' })
  }
}
</script>
<template>
    <div class="menu-bar">
        <ul class="bar-list">
            <li @click="tabChange('Timeline')">TimeLine</li>
            <li @click="tabChange('Message')">Message</li>
            <li @click="tabChange('createPost')">➕POST</li>
            <li @click="tabChange('Profile')">Profile</li>
        </ul>
    </div>
</template>