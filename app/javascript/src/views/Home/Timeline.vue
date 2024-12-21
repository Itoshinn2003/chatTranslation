<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Timeline from '@/components/HomeTimeline.vue';
import Message from '@/components/HomeMessage.vue';
import Profile from '@/components/HomeProfile.vue';

let currentTab = ref(Timeline);
let router = useRouter();

function tabChange(tabName: string) {
  if (tabName === 'Timeline') {
    router.push({ name: 'Timeline' });
  } else if (tabName === 'Message') {
    router.push({ name: 'Message' });
  } else if (tabName === 'Profile') {
    router.push({ name: 'Profile' });
  }
}
</script>

<template>
    <div class="home">
    <h2 class="text-center">CHAT-TRANSLATION</h2>
    <div class="tweet-box">
    <div class="tweet">
        <div class="tweet-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="user-info">
                <span class="username">いとしん</span>
                <span class="handle">@itsn39</span>
                <span class="timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="tweet-body">
            <p class="tweet-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="tweet">
        <div class="tweet-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="user-info">
                <span class="username">いとしん</span>
                <span class="handle">@itsn39</span>
                <span class="timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="tweet-body">
            <p class="tweet-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="tweet">
        <div class="tweet-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="user-info">
                <span class="username">いとしん</span>
                <span class="handle">@itsn39</span>
                <span class="timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="tweet-body">
            <p class="tweet-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="tweet">
        <div class="tweet-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="user-info">
                <span class="username">いとしん</span>
                <span class="handle">@itsn39</span>
                <span class="timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="tweet-body">
            <p class="tweet-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="tweet">
        <div class="tweet-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="user-info">
                <span class="username">いとしん</span>
                <span class="handle">@itsn39</span>
                <span class="timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="tweet-body">
            <p class="tweet-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    <div class="tweet">
        <div class="tweet-header">
            <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-img">
            <div class="user-info">
                <span class="username">いとしん</span>
                <span class="handle">@itsn39</span>
                <span class="timestamp">2024/12/19 17:14</span>
            </div>
        </div>
        <div class="tweet-body">
            <p class="tweet-text">これはツイートの内容が入るテキストです。ハッシュタグやリンクもここに入れられます</p>
        </div>
    </div>
    </div>
  
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

.user-info {
  display: flex;
  flex-direction: column;
}

.username {
  font-weight: bold;
}

.handle {
  color: #657786;
}

.timestamp {
  color: #aab8c2;
  font-size: 0.85em;
}
</style>