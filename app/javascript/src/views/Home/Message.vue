<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Timeline from '@/components/HomeTimeline.vue';
import opponentProfile from '@/components/opponentProfile.vue';
import menuBar from '@/components/menuBar.vue';

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
        history.pushState(null, '', '/home/message');
        showProfile.value = false;
    } else {
        history.pushState(null, '', '/home/message/profile/32');
        showProfile.value = true;
    }
}

function showChat() {
    router.push({name:'Chat'})
}
</script>
<template>
<div class="home">
    <h2 class="text-center">CHAT-TRANSLATION</h2>
    <div class="member-list">
      <div class="member-card" @click="showChat">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar" @click="showOpponentProfile">
        <div class="member-info">
          <h3 class="member-name">ユーザー3</h3>
          <span class="member-id">@user1</span>
          <p class="member-bio">趣味: 音楽, 映画。仲良くなりたいです！</p>
        </div>
      </div>
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h3 class="member-name">ユーザー3</h3>
          <span class="member-id">@user1</span>
          <p class="member-bio">趣味: 音楽, 映画。仲良くなりたいです！</p>
        </div>
      </div>
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h3 class="member-name">ユーザー3</h3>
          <span class="member-id">@user1</span>
          <p class="member-bio">趣味: 音楽, 映画。仲良くなりたいです！</p>
        </div>
      </div>
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
            <h3 class="member-name">ユーザー3</h3>
          <span class="member-id">@user2</span>
          <p class="member-bio">趣味: 音楽, 映画。仲良くなりたいです！</p>
        </div>
      </div>
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h3 class="member-name">ユーザー3</h3>
          <span class="member-id">@user3</span>
          <p class="member-bio">ゲーム、映画、アニメ。気軽に話しかけてください！</p>
        </div>
      </div>
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h3 class="member-name">ユーザー3</h3>
          <span class="member-id">@user3</span>
          <p class="member-bio">ゲーム、映画、アニメ。気軽に話しかけてください！</p>
        </div>
      </div>
      
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h3 class="member-name">ユーザー3</h3>
          <span class="member-id">@user3</span>
          <p class="member-bio">ゲーム、映画、アニメ。気軽に話しかけてください！</p>
        </div>
      </div>
    </div>
    <menuBar></menuBar>
    <opponentProfile v-if="showProfile"></opponentProfile>
</div>
</template>

<style>

.page-title {
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
  text-align:center;
}

.member-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  height:90%;
  overflow: scroll;
  padding-bottom:50px;
}
.member-card {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border-bottom:0.5px solid rgb(175, 175, 175);
  padding: 0 10px;
}

/* メンバーのプロフィール画像 */
.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border-bottom: 2px solid #f0f0f0;
}

/* メンバー情報 */
.member-info {
  padding: 20px;
}

.member-name {
  font-size: 1.6em;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.member-id {
  font-size: 1.1em;
  color: #657786;
  margin-bottom: 10px;
  display: block;
}

.member-bio {
  font-size: 12px;
  color: #000000;
  line-height: 1.5;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .member-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .member-list {
    grid-template-columns: 1fr;
  }
}
</style>