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
    Message
    <div class="member-list-container">
    <h1 class="page-title">DM</h1>
    <div class="member-list">
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h2 class="member-name">ユーザー3</h2>
          <span class="member-id">@user1</span>
          <p class="member-bio">趣味: 音楽, 映画。仲良くなりたいです！</p>
        </div>
      </div>
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h2 class="member-name">ユーザー3</h2>
          <span class="member-id">@user1</span>
          <p class="member-bio">趣味: 音楽, 映画。仲良くなりたいです！</p>
        </div>
      </div>
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h2 class="member-name">ユーザー3</h2>
          <span class="member-id">@user1</span>
          <p class="member-bio">趣味: 音楽, 映画。仲良くなりたいです！</p>
        </div>
      </div>

      
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
            <h2 class="member-name">ユーザー3</h2>
          <span class="member-id">@user2</span>
          <p class="member-bio">趣味: 音楽, 映画。仲良くなりたいです！</p>
        </div>
      </div>
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h2 class="member-name">ユーザー3</h2>
          <span class="member-id">@user3</span>
          <p class="member-bio">ゲーム、映画、アニメ。気軽に話しかけてください！</p>
        </div>
      </div>
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h2 class="member-name">ユーザー3</h2>
          <span class="member-id">@user3</span>
          <p class="member-bio">ゲーム、映画、アニメ。気軽に話しかけてください！</p>
        </div>
      </div>
      
      <div class="member-card">
        <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="member-avatar">
        <div class="member-info">
          <h2 class="member-name">ユーザー3</h2>
          <span class="member-id">@user3</span>
          <p class="member-bio">ゲーム、映画、アニメ。気軽に話しかけてください！</p>
        </div>
      </div>

      <!-- 他のメンバーカードを追加 -->
    </div>
  </div>
    <div class="menu-bar">
        <ul>
            <!-- ディレクティブの後はダブルクヲーテーションの中がjavascriptの式をしてみられるので -->
            <li @click="tabChange('Timeline')">TimeLine</li>
            <li @click="tabChange('Message')">Message</li>
            <li @click="tabChange('Profile')">Profile</li>
        </ul>
    </div>
</div>
</template>

<style>
.member-list-container {
  width: 100%;
  margin: 30px auto 0;
}

.page-title {
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

/* メンバー一覧 */
.member-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  height:90%;
    overflow: scroll;
}

/* メンバーカード */
.member-card {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border-bottom:0.5px solid rgb(175, 175, 175);
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