<template>
    <div class='background'>

        <img :src="details.img + '/c'" />
        <div class="imgPreview" :style="{ 'background-image': 'url(' + imageUrl + ')' }"></div>

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
    data() {
        return {
            imageUrl: this.details.img + "/c",
        }
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

.imgPreview {
    width: 160px;
    background-size: cover;
}
</style>