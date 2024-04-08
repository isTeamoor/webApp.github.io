<template>
    <div class='background'>

        <img class="imgPreview" :src="details.img + '/c'" />

        <div class='info'>
            <div class='header'>lot#{{ details.id }} - {{ details.label }}</div>
            <div class='description'>{{ details.description }}</div>
            <div class='bids'>{{ details.bids }}</div>
        </div>

    </div>
</template>



<script>
export default {
    name: 'lot-preview',
    props: {
        details: Object
    },
    mounted() {
        console.log(this.details)
    }
}
</script>



<style scoped>
.background {
    border: 2px solid black;
    border-radius: 1%;
    display: flex;
    align-items: stretch;
    height: 164px;
    margin-top: 1em;
}

img {
    width: 160px;
    background-color: chocolate;
}
</style>