<template>
    <div class='lotpopUp-wrapper' @click='closePopUp'>
        <div class='lotpopUp-info'>
            <div class='close-button' @click='closePopUp_B'>X</div>
            <div class='lotpopUp-lotDeatails'></div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        closePopUp(event) {
            if (event.target == document.querySelector(".lotpopUp-wrapper")) {
                this.$emit("closepopUp");
            }
        },
        closePopUp_B(event) {
            if (event.target == document.querySelector(".close-button")) {
                this.$emit("closepopUp");
            }
        },
    },
}
</script>
<style scoped>
.close-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: blue;
    color: black;
    position: absolute;
    right: 0;
    top: 0;
    border: 3px solid black;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
}

.lotpopUp-info {
    background-color: black;
    opacity: 0.7;
    position: absolute;
    left: 40px;
    right: 40px;
    top: 40px;
    bottom: 40px;
}

.lotpopUp-wrapper {
    background-color: whitesmoke;
    opacity: 0.7;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.lotInfo {
    flex-grow: 1;
}
</style>