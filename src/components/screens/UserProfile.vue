<template>
    <div>
        <p>User ID {{ userData.id }}</p>
        <p>First_name {{ userData.first_name }}</p>
        <p>Last_name {{ userData.last_name }}</p>
        <p>username {{ userData.username }}</p>

        <button @click="sendToBot"> Send Data</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userData: {},
        };
    },
    methods: {
        sendToBot() {
            let data = "1";
            window.Telegram.WebApp.sendData(data)
        },
    },
    created() {
        if (window.Telegram.WebApp.initDataUnsafe.hasOwnProperty('user')) {
            this.userData = window.Telegram.WebApp.initDataUnsafe.user
        } else { this.userData = { 'id': 0, 'first_name': 'undefined', 'last_name': 'undefined', 'username': 'undefined' } }
    }
}

</script>
<style></style>