<script setup lang="ts">
import { ref, Ref } from 'vue';
import { index, userData, profileResponse } from '@/api/profile';
import { showPosts, postResponse, createPost } from '@/api/post';
import { useRouter } from 'vue-router';
import postBox from '@/components/postBox.vue';
import menuBar from '@/components/menuBar.vue';

let postData = ref(null) as Ref<string | null>;
let current_user = ref(null) as Ref<profileResponse | null>;
let router = useRouter();

function click() {
    createPost({id: userData, postData: postData.value}).then((response) => {
    console.log(response)
})
}
</script>
<template>
<div class="home">
    <h2 class="text-center">CHAT-TRANSLATION</h2>
    <form class="p-5">
        <textarea rows="10" cols="40" v-model="postData"></textarea>
        <input type='submit' class="d-block" value="投稿する" @click="click">
    </form>
    <menuBar></menuBar>
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