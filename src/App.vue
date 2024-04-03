<template>
    <h1>Hi</h1>
    <nav-menu></nav-menu>
    <div class='display'>
        <router-view />
    </div>
</template>

<script>
import navMenu from "./components/elements/navMenu.vue"
export default {
    components: {
        navMenu,
    }
};
</script>

<style scoped>
.display {
    height: 200em;
    border: 2px solid black;
    background: linear-gradient(gray 2%, bisque 5%, white);
}
</style>