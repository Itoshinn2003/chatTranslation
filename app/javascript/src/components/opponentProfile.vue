<template>
        <div class="opponent-profile">
            <div class="opponent-profile-header">
                <img src="@/images/facebook.jpeg" alt="プロフィール画像" class="profile-image">
                <div class="profile-info">
                    <h3 class="profile-name">いとしん</h3>
                    <span class="profile-id">@itsn39</span>
                    <p class="profile-bio">一言コメントがここに入ります。趣味や自己紹介など。</p>
                    <p class="follow-number">follow 29 follower 30</p>
                </div>
            </div>
            <div class="opponent-profile-tweet-box">
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
        </div>
</template>

<style scoped>
.opponent-profile {
    width:90%;
    margin:0 auto;
    background-color:white;
}
.opponent-profile-header {
    border-bottom: 1px solid rgb(92, 91, 91);
}
.tweet {
    border-bottom: 1px solid rgb(149, 149, 149);
}
</style>