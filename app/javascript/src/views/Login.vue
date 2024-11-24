<template>
    <form class="mx-auto w-25 login p-5">
        <h1 class="mb-3">ログイン</h1>
        <div class="mb-4">
            <p>ID</p>
            <input type="text" class="stylish-input" placeholder="Your ID">
        </div>
        <div class="mb-4">
            <p>Password</p>
            <input type="text" class="stylish-input" placeholder="Your PASSWORD">
        </div>
        <input type='button' value="登録" class="login-btn">
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
</style>
