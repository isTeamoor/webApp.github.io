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
            tg: window.Telegram.WebApp
        };
    },
    methods: {
        sendToBot() {
            let data = "1";
            this.tg.sendData(data)
        },
    },
    created() {
        if (this.tg.hasOwnProperty('user')) {
            this.userData = this.tg.user
        } else { this.userData = { 'user': { 'id': 0, 'first_name': 'undefined', 'last_name': 'undefined', 'username': 'undefined' } } }
    }
}

</script>
<style></style>