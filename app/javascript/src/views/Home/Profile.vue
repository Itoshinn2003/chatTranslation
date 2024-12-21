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
    <div class="profile-header">
      <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-image">
      <div class="profile-info">
        <h3 class="profile-name">いとしん</h3>
        <span class="profile-id">@itsn39</span>
        <p class="profile-bio">一言コメントがここに入ります。趣味や自己紹介など。</p>
        <p class="follow-number">follow 29 follower 29</p>
      </div>
    </div>
    <div class="profile-tweet-box">
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
.profile-header {
  display: flex;               
  align-items: center;         
  margin-bottom: 20px;        
}
.follow-number {
    margin-top:10px;
    color:rgb(45, 45, 45);
    font-size:14px;
}

.profile-image {
  width: 80px;             
  height: 80px;            
  border-radius: 50%;    
  object-fit: cover;         
  margin-right: 20px;        
}

.profile-info {
  flex: 1;                  
}
.profile-tweet-box {
    height:65%;
      overflow: scroll;
}
.profile-name {
  font-size: 1.8em;          
  font-weight: bold;           
  color: #14171a;       
  margin-bottom: 5px;          
}

.profile-id {
  color: #657786;      
  font-size: 1.1em;       
  margin-bottom: 10px;  
}

.profile-bio {
  color: #14171a;  
  font-size: 1.1em;     
  line-height: 1.5;           
  max-width: 500px;    
  word-wrap: break-word;       
}


.tweet {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 20px auto;
  padding: 15px;
}
</style>