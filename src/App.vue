<template>
    <h1>Hi</h1>

    <div class='navMenu'>
        <button @click="$router.push('/aucsList')" class='navButton'>Активные аукционы</button>
        <button @click="$router.push('/newLot')" class='navButton'>Выставить лот</button>
        <button @click="$router.push('/userProfile')" class='navButton'>User Profile</button>
    </div>

    <div class='display'>
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navButton {
    flex-grow: 1;
    padding: 1em 0 1em 0;
}

.display {
    height: 200em;
    border: 2px solid black;
    background: linear-gradient(gray 2%, bisque 5%, white);
}
</style>