<template>
    <div>
        <select name="categoryFilter" id="categFilt" @change="handleChange">
            <option value="active">active</option>
            <option value="closed">closed</option>
        </select>
    </div>
</template>
<script>
export default {
    methods: {
        handleChange(event) {
            console.log(event.target.value)
            const selectedValue = event.target.value;
            this.$emit('categorySelected', selectedValue);
        }
    }
}

</script>