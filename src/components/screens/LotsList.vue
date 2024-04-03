<template>
    <div class='lotsList'>
        <lots-filters @filters="applyFilters" />

        <lot-preview v-for="lot in actual_lotsList" :details="lot" @click="open_lotWindow(lot)" />

        <lot-window v-if="lotDetails" :details="lotDetails" @closeWindow="close_lotWindow" />

    </div>
</template>



<script>
import lotWindow from "/src/components/elements/lotWindow.vue"
import lotPreview from "/src/components/elements/lotPreview.vue"
import lotsFilters from "/src/components/elements/lotsFilters.vue"

export default {
    components: {
        lotPreview,
        lotWindow,
        lotsFilters
    },
    data() {
        return {
            lotDetails: null,
            serverData: [],
            actual_lotsList: [],
            filters: [],
        };
    },
    methods: {
        close_lotWindow() {
            this.lotDetails = null;
        },
        open_lotWindow(lot) {
            this.lotDetails = lot;
        },
        get_allLots() {
            fetch("http://127.0.0.1:8000/db/allLots").then(d => d.json()).then(d => this.serverData = d)
        },
        applyFilters(filters) {
            console.log(filters)
            this.filters = filters;
            this.actual_lotsList = this.serverData.filter(item => {
                for (let filter of this.filters) {
                    if (filter.val == '') return true
                    if (item[filter.name] != filter.val) { return false }
                };
                return true
            });
        },
    },

    watch: {
        serverData() {
            this.actual_lotsList = this.serverData.filter(item => {
                for (let filter of this.filters) {
                    if (item[filter.name] != filter.val) return false
                };
                return true
            })
        },
    },

    mounted() {
        this.get_allLots()
    }
}
</script>


<style scoped>
.lotsList {
    position: relative;
}
</style>