<script setup lang="ts">
import { useRouter } from 'vue-router';
import Timeline from '@/components/HomeTimeline.vue';
import Message from '@/components/HomeMessage.vue';
import Profile from '@/components/HomeProfile.vue';

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
        <div class="chat-container">
            <div class="header">CHAT-TRANSLATION</div>
            <div class="chat-window">
                <div class="message received">Hi! How are you?</div>
                <div class="message sent">I'm good, thanks! And you?</div>
                <div class="message received">Doing great. What's up?</div>
                <div class="message received">Hi! How are you?</div>
                <div class="message sent">I'm good, thanks! And you?</div>
                <div class="message received">Doing great. What's up?</div>
                <div class="message received">Hi! How are you?</div>
                <div class="message sent">I'm good, thanks! And you?</div>
                <div class="message received">Doing great. What's up?</div>
                <div class="message received">Hi! How are you?</div>
                <div class="message sent">I'm good, thanks! And you?</div>
                <div class="message received">Doing great. What's up?</div>
            </div>
            <div class="footer">
                <input type="text" placeholder="Type a message...">
                <button>Send</button>
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
.chat-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 600px;
      margin: auto;
      border: 1px solid #ddd;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      height:95%;
}

    .header {
      padding: 15px;
      background-color: #4CAF50;
      color: white;
      text-align: center;
      font-size: 20px;
    }

    .chat-window {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    }

    .message {
      margin: 10px 0;
      max-width: 70%;
      padding: 10px;
      border-radius: 8px;
      line-height: 1.5;
    }

    .message.sent {
      background-color: #e1ffc7;
      align-self: flex-end;
    }

    .message.received {
      background-color: #f1f0f0;
      align-self: flex-start;
    }

    .footer {
      display: flex;
      padding: 10px;
      border-top: 1px solid #ddd;
      background-color: #f9f9f9;
    }

    .footer input[type="text"] {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
    }

    .footer button {
      padding: 10px 15px;
      margin-left: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }

    .footer button:hover {
      background-color: #45a049;
    }
</style>