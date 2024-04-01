<template>
    <div class='lotPreview'>
        <div class='lotPreview-img'></div>

        <div class='lotInfo'>
            <div class='lotPreview-label'>lot#{{ this.id }} - {{ this.label }}</div>
            <div class='lotPreview-description'>{{ this.description }}</div>
            <div class='lotPreview-bidsInfo'>{{ this.bids }}</div>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        id: Number,
        label: String,
        description: String,
        bids: String,
    }
}
</script>



<style scoped>
.lotPreview-img {
    width: 160px;
    background-color: chocolate;
}

.lotPreview {
    border: 2px solid black;
    border-radius: 1%;
    display: flex;
    align-items: stretch;
    height: 164px;
    margin-top: 1em;
}
</style>