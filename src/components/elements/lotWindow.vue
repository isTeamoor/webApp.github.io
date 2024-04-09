<template>
    <div class='background' @click="closeWindow">

        <div class='info'>
            <button class="close-button" @click="this.$emit('closeWindow')">X</button>

            <div class="lot-details">
                <img class="imgPreview" :src="details.img + '/f'" />
                <div> {{ this.details }} </div>
            </div>
            <h1>Bids</h1>

            <input type="number" id="myBid">
            <button @click="applyBid">Apply Bid</button>

            <h3>Bids hystory</h3>
            <div class="bids-details">
                <p>User 1 set 1000 at 20:30 09.04.2024</p>
                <p>User 4 set 500 at 15:00 09.04.2024</p>
                <p v-for="bid in this.bidsLog">{{ bid }}</p>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'lot-window',
    props: { details: Object },
    data() {
        return {
            bidsLog: []
        }
    },
    methods: {
        closeWindow(event) {
            if (event.target.classList.contains('background')) {
                this.$emit('closeWindow')
            }
        },
        applyBid() {
            let amount = document.querySelector('#myBid').value;
            const now = new Date();
            const dateString = now.toLocaleString('ru-RU');
            let options = {
                lot_id: this.details.id,
                amount: amount,
                user_id: window.Telegram.WebApp.initDataUnsafe.user || 0,
                date: dateString
            };
            fetch("https://isteamoor1.pythonanywhere.com/db/newBid",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(options)
                }).then(d => d.json()).then(d => { console.log(d); this.bidsLog = d.bids })
        }
    }
}
</script>


<style scoped>
.background {
    background-color: whitesmoke;
    opacity: 0.7;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.info {
    background-color: black;
    border: 2px solid black;
    opacity: 1;
    position: absolute;
    left: 10%;
    right: 10%;
    top: 10%;
    bottom: 10%;
    color: white;
}

.close-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #007bff;
    color: #ffffff;
    border: 2px solid black;
    cursor: pointer;
    position: absolute;
    right: 10%;
    top: 10%;
}

.imgPreview {
    width: 350px;
    height: 350px;
}
</style>