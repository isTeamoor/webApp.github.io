<template>
    <div class='showAll'>
        <lot-preview @click="showLot"></lot-preview>
        <lot-preview @click="showLot"></lot-preview>
        <lot-preview></lot-preview>
        <lot-preview></lot-preview>
        <component :is="currentPopUpComponent" v-if="currentPopUpComponent" @closepopUp='closeLot' />
    </div>
</template>
<script>
import lotpopUp from "../elements/lotpopUp.vue";
import lotpreview from "../elements/lotPreview.vue"
export default {
    components: {
        "lot-popUp": lotpopUp,
        "lot-preview": lotpreview
    },
    data() {
        return {
            currentPopUpComponent: null,
        };
    },
    methods: {
        showLot() {
            this.currentPopUpComponent = "lot-popUp";
        },
        closeLot() {
            this.currentPopUpComponent = null;
        },
    },
}
</script>
<style scoped>
.showAll {
    position: relative;
}
</style>