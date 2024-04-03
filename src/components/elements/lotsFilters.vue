<template>
    <div class="filtMenu">

        <select name="bids" id="bids" @change="changed">
            <option value="" selected disabled>Choose sections</option>
            <option value=""></option>
            <option value="active">active</option>
            <option value="closed">closed</option>
        </select>

        <input type='number' name="id" id="id" @change="changed">

        <button @click="this.$emit('filters', this.filters)">Go</button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            filters: [],
        }
    },
    methods: {
        changed(event) {
            let target = this.filters.find(item => item.name == event.target.name);
            if (target) {
                target.val = event.target.value
            } else { this.filters.push({ 'name': event.target.name, 'val': event.target.value }) }
        },
    }
}
</script>