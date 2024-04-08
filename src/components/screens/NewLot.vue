<template>
    <div>
        <h1>Создание нового лота</h1>
        <img class="imgPreview" />

        <form enctype="multipart/form-data" action="https://isteamoor1.pythonanywhere.com/db/newLot" method="post">
            <label for="new label">Назовите ваш товар</label>
            <input type="text" id="new label" name="label">

            <label for="new textContent">Добавьте краткое описание лота</label>
            <textarea name="description" id="new textContent" rows="10" cols="30"></textarea><br>

            <label for="new textContent">Стартовая цена</label>
            <input type='number' min='1000' step='1000' />

            <label for="new textContent">Размер шага для повышения ставки</label>
            <input type='number' min='1000' step='1000' />
            <p>сум</p>

            <label for="new img">Добавьте фото товара</label>
            <input type="file" name="img" id="new img" accept="image/*" @change="showPreview" />

            <input type="hidden" name="user_id" value="{{ tg.user.id }}">
            <button type="submit">Выставить лот на торги</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tg: tg,
        }
    },
    methods: {
        showPreview(event) {
            const imgBox = document.querySelector(".imgPreview");
            const file = event.target.files[0];
            imgBox.src = window.URL.createObjectURL(file);
        },
    },
}
</script>
<style scoped>
.imgPreview {
    width: 160px;
    height: 160px;
}
</style>