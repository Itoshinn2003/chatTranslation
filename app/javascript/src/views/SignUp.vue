<template>
    <form class="mx-auto sign-up p-5">
        <h1 class="mb-3">新規登録</h1>
        <div class="mb-4">
            <p>ID</p>
            <input type="text" class="stylish-input" placeholder="Your ID">
        </div>
        <div class="mb-4">
            <p>Password</p>
            <input type="text" class="stylish-input" placeholder="Your PASSWORD">
        </div>
        <div class="mb-4">
            <p>Name</p>
            <input type="text" class="stylish-input" placeholder="Your Name">
        </div>
        <div class="mb-4">
            <p>Language</p>
            <input type="text" class="stylish-input" placeholder="Your Language">
        </div>
        <input type='button' value="登録" class="signin-btn mb-4">
        <a>ログインに進む</a>
    </form>
</template>

<style>
h1{
    font-size:24px;
    text-align:center;
}
label{
    display: inline-flex;
}
p{
    font-size:20px;
}
a {
    font-size:14px;
    display:block;
}
</style>
