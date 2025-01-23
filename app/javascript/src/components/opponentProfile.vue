<script setup lang="ts">
import { index } from '@/api/post';
import { ref, Ref } from 'vue';
import { create, destroy } from '@/api/follow';
import { userStore } from '@/store/user';
import { countFollow } from '@/api/follow';
import postBox from '@/components/postBox.vue';

const props = defineProps<{
    userData: null | userResponse;
}>();
let Store = userStore();
let posts = ref([]) as Ref<postResponse[]>;
let followCount = ref(null) as Ref<followCountResponse | null>;
let timelineHeight = "60%";
let isFollow = ref(!props.userData?.follow) as Ref<Boolean | null>;
index({id: props.userData?.user.id}).then((response) => {
    posts.value = response;
})
countFollow({id: props.userData?.user.id}).then((response) => {
    followCount.value = response;
})

function changeFollow() {
    if ( isFollow.value ) {
        destroy({id: Store.userData, opponentId: props.userData?.user.id})
        isFollow.value = false;
    } else {
        create({id: Store.userData, opponentId: props.userData?.user.id})
        isFollow.value = true;
    }
}


</script>
<template>
        <div class="opponent-profile">
            <div class="opponent-profile-header">
                <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-image">
                <div class="profile-info">
                    <h3 class="profile-name">{{ userData?.user.name }}</h3>
                    <span class="profile-id">@{{ userData?.user.user_id }}</span>
                    <p class="profile-bio">{{ userData?.user.sentence }}</p>
                    <p class="follow-number">follow {{ followCount?.follow }} follower {{ followCount?.follower }}</p>
                    <button v-if="Store.userData != userData?.user.id"    @click="changeFollow()">{{ isFollow ? 'フォロー中' : 'フォローする' }}</button>
                </div>
            </div>
            <postBox :height="timelineHeight" :posts="posts"></postBox>
        </div>
</template>

<style scoped>
button {
    margin: 20px 0;
}
.opponent-profile {
    background-color:white;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    width:80%;
    border: 1px solid rgb(169, 169, 169);
    padding: 30px;
    border-radius: 10px;
}
.opponent-profile-header {
    display: flex;
    align-items: center;
    border-bottom:1px solid rgb(95, 95, 95);
}
</style>