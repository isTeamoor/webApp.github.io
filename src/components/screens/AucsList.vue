<template>
    <div class='showAll'>
        <aucs-filters @categorySelected="handleFilteredData" />
        <lot-preview v-for="lot in array" :id="lot.id" :label="lot.label" :description="lot.description"
            :bids="lot.bids" @click="showLot"></lot-preview>
        <component :is="currentPopUpComponent" v-if="currentPopUpComponent" @closepopUp='closeLot' />
    </div>
</template>



<script>
import lotpopUp from "../elements/lotpopUp.vue";
import lotpreview from "../elements/lotPreview.vue"
import aucsfilters from "../elements/aucsFilters.vue"

export default {
    components: {
        "lot-popUp": lotpopUp,
        "lot-preview": lotpreview,
        'aucs-filters': aucsfilters
    },
    data() {
        return {
            responseFromDB: [
                {
                    id: 1001,
                    label: "Aucs-1",
                    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    bids: "active",
                },
                {
                    id: 1002,
                    label: "Aucs-2",
                    description: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
                    bids: "closed",
                },
                {
                    id: 1003,
                    label: "Aucs-3",
                    description: "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
                    bids: "active",
                },
                {
                    id: 1004,
                    label: "Aucs-4",
                    description: "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
                    bids: "closed",
                },
                {
                    id: 1005,
                    label: "Aucs-5",
                    description: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    bids: "active",
                },
            ],
            array: [],
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
        handleFilteredData(selectedValue) {
            console.log(selectedValue)
            this.array = this.responseFromDB.filter(lot => lot.bids == selectedValue)
        }
    },
    mounted() {
        this.array = this.responseFromDB
    }
}
</script>
<style scoped>
.showAll {
    position: relative;
}
</style>