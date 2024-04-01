<template>
    <div>
        <p>User ID {{ WebAppInitData.user.id }}</p>
        <p>First_name {{ WebAppInitData.user.first_name }}</p>
        <p>Last_name {{ WebAppInitData.user.last_name }}</p>
        <p>username {{ WebAppInitData.user.username }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            WebAppInitData: window.Telegram.WebApp.initDataUnsafe,
        };
    },
}
</script>
<style></style>