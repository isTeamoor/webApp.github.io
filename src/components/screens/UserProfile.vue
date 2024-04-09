<template>
    <div>
        09.04.2024 - 11-21
        <p>User ID - {{ userData.id }}</p>
        <p>First_name - {{ userData.first_name }}</p>
        <p>Last_name - {{ userData.last_name }}</p>
        <p>username - {{ userData.username }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {},
        };
    },
    created() {
        this.userData = window.Telegram.WebApp.initDataUnsafe.hasOwnProperty('user') ?
            window.Telegram.WebApp.initDataUnsafe.user :
            { 'id': 0, 'first_name': 'undefined', 'last_name': 'undefined', 'username': 'undefined' }
    }
}
</script>
<style></style>