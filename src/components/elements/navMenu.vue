<template>
    <div class='navMenu'>
        <button @click="$router.push('/aucsList')" class='navButton'>Активные аукционы</button>
        <button @click="$router.push('/newLot')" class='navButton'>Выставить лот</button>
        <button @click="$router.push('/userProfile')" class='navButton'>User Profile</button>
    </div>
</template>

<script></script>
<style>
.navMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navButton {
    flex-grow: 1;
    padding: 1em 0 1em 0;
}
</style>
