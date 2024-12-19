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
        Profile
    <div class="profile-header">
      <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-image">
      <div class="profile-info">
        <h2 class="profile-name">いとしん</h2>
        <span class="profile-id">@itsn39</span>
        <p class="profile-bio">一言コメントがここに入ります。趣味や自己紹介など。</p>
      </div>
    </div>
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
/* .profile-header {
  width:100%;
  background-color:white;
  display: flex;
  margin-bottom: 20px;
} */
.profile-header {
  display: flex;               /* 横並びにするためにflexboxを使用 */
  align-items: center;         /* 画像とテキストを縦方向に中央揃え */
  margin-bottom: 20px;         /* 下に余白を追加 */
}

.profile-image {
  width: 80px;                /* プロフィール画像の幅 */
  height: 80px;               /* プロフィール画像の高さ */
  border-radius: 50%;          /* 丸くするためにborder-radiusを50%に */
  object-fit: cover;           /* 画像が枠内にきれいに収まるように調整 */
  margin-right: 20px;          /* 画像とテキストの間に余白を追加 */
}

.profile-info {
  flex: 1;                     /* テキスト部分を残りのスペースで広げる */
}

.profile-name {
  font-size: 1.8em;            /* ユーザー名のフォントサイズ */
  font-weight: bold;           /* ユーザー名を太字に */
  color: #14171a;              /* ユーザー名の文字色 */
  margin-bottom: 5px;          /* ユーザー名の下に少し余白 */
}

.profile-id {
  color: #657786;              /* ユーザーIDの文字色（薄いグレー） */
  font-size: 1.1em;            /* ユーザーIDのフォントサイズ */
  margin-bottom: 10px;         /* IDの下に余白 */
}

.profile-bio {
  color: #14171a;              /* 一言コメントの文字色 */
  font-size: 1.1em;            /* 一言コメントのフォントサイズ */
  line-height: 1.5;            /* 一行あたりの行間を広げる */
  max-width: 500px;            /* コメント部分の最大幅を設定 */
  word-wrap: break-word;       /* 長い単語を折り返して表示 */
}


.tweet {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 20px auto;
  padding: 15px;
}

.tweet-header {
  display: flex;
  align-items: center;
}
.tweet-body {
  margin-top: 10px;
}

.tweet-text {
  font-size: 1em;
  color: #14171a;
}

.tweet-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.tweet-box {
    height:90%;
    overflow: scroll;
}
</style>