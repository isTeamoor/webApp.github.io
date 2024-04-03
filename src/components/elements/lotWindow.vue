<template>
    <div class='background' @click="closeWindow">
        <div class='info'>
            <button class="close-button" @click="this.$emit('closeWindow')">X</button>
            {{ this.details }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'lot-window',
    props: { details: Object },
    methods: {
        closeWindow(event) {
            if (event.target.classList.contains('background')) {
                this.$emit('closeWindow')
            }
        },
    }
}
</script>


<style scoped>
.background {
    background-color: whitesmoke;
    opacity: 0.7;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.info {
    background-color: black;
    opacity: 0.7;
    position: fixed;
    left: 10%;
    right: 10%;
    top: 10%;
    bottom: 10%;
    color: blue;
}

.close-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #007bff;
    color: #ffffff;
    border: 2px solid black;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
}
</style>