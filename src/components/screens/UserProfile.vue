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
            WebAppInitData: {}
        };
    },
    created() {
        if (window.Telegram.WebApp.hasOwnProperty('user')) {
            this.WebAppInitData = window.Telegram.WebApp
        } else { this.WebAppInitData = { 'user': { 'id': 0, 'first_name': 'undefined', 'last_name': 'undefined', 'username': 'undefined' } } }
    }
}

</script>
<style></style>