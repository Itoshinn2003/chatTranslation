<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Timeline from '@/components/HomeTimeline.vue';
import postBox from '@/components/postBox.vue';

let currentTab = ref(Timeline);
let timelineHeight = '65%';
let router = useRouter();
let showFollow = ref(false);
let showFollower = ref(false);


function tabChange(tabName: string) {
  if (tabName === 'Timeline') {
    router.push({ name: 'Timeline' });
  } else if (tabName === 'Message') {
    router.push({ name: 'Message' });
  } else if (tabName === 'Profile') {
    router.push({ name: 'Profile' });
  }
}

function showFollowList() {
    if (showFollow.value) {
        history.pushState(null, '', '/home/profile');
        showFollow.value = false;
    } else {
        history.pushState(null, '', '/home/profile/follow');
        showFollow.value = true;
    }
}

function showFollowerList() {
    if (showFollower.value) {
        history.pushState(null, '', '/home/profile');
        showFollower.value = false;
    } else {
        history.pushState(null, '', '/home/profile/follower');
        showFollower.value = true;
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
        <p class="follow-number"><span @click="showFollowList">follow 29</span> <span @click="showFollowerList">follower 30</span></p>
        <button>プロフィール編集</button>
      </div>
    </div>
    <postBox :height=timelineHeight></postBox>
    <div class="menu-bar">
        <ul>
            <li @click="tabChange('Timeline')">TimeLine</li>
            <li @click="tabChange('Message')">Message</li>
            <li @click="tabChange('Profile')">Profile</li>
        </ul>
    </div>

    <div class="follow-list" v-if="showFollow">
    <p>フォロー</p>
    <div class="follow-box">
        <div class="follow">
            <p>名前<span>@ididid</span></p>
        </div>
        <div class="follow">
            <p>名前<span>@ididid</span></p>
        </div>
        <div class="follow">
            <p>名前<span>@ididid</span></p>
        </div>
        <div class="follow">
            <p>名前<span>@ididid</span></p>
        </div>
    </div>
    </div>

    <div class="follower-list" v-if="showFollower">
    <p>フォロワー</p>
    <div class="follower-box">
        <div class="follower">
            <p>名前<span>@ididid</span></p>
        </div>
        <div class="follower">
            <p>名前<span>@ididid</span></p>
        </div>
        <div class="follower">
            <p>名前<span>@ididid</span></p>
        </div>
        <div class="follower">
            <p>名前<span>@ididid</span></p>
        </div>
    </div>
    </div>
</div>
</template>

<style>
.follow-list, .follower-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:80%;
    border: 1px solid black;
    background-color:white;
}
.profile-header {
  display: flex;               
  align-items: center;         
  margin: 10px;  
  padding:10px;
  border:0.5px solid rgb(147, 147, 147);     
  background-color:white; 
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

.profile-bio {
  color: #14171a;  
  font-size: 1.1em;     
  line-height: 1.5;           
  max-width: 500px;    
  word-wrap: break-word;       
}
</style>