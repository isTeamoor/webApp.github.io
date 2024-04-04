<template>
    <div class='background'>

        <img :src="imageUrl" />

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
            imageUrl: null
        };
    },
    mounted() {
        console.log(this.details)
        this.fetchImage();
    },
    methods: {
        async fetchImage() {
            try {
                const response = await fetch(this.details.img + '/f');
                if (!response.ok) {
                    throw new Error('Ошибка загрузки изображения');
                }
                const blob = await response.blob(); // Получаем Blob объект из ответа
                this.imageUrl = URL.createObjectURL(blob); // Создаем URL для Blob объекта
            } catch (error) {
                console.error('Ошибка загрузки изображения:', error);
            }
        }
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