<script setup>
import { reactive, ref, watch } from 'vue';
import axios from 'axios';

const messeage = reactive({
    email: "",
    content: ""
});
const emailError = ref("");
const contentError = ref("");
const status = ref("");

watch(() => messeage.email, (email) => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email)) {
        emailError.value = "OK";
    }
    else {
        emailError.value = "Podaj poprawny adres email";
    }
})

watch(() => messeage.content, (content) => {
    contentError.value = "Pozostało " + (3000 - content.length) + " znaków";
})

function submit() {
    if (emailError.value == "OK" && status.value == "") {
        axios.post('/sendEmail', {params: messeage})
            .then((res) => {
                status.value = "Poprawnie wysłano wiadomość";
                messeage.email = "";
                messeage.content = "";
            })
            .catch((err) => {
                status.value = "Blad wysylania wiadomości: " + err;
            });
    }
}
</script>

<template>

            <h2>Kontakt</h2>
            <form>
                <label for="email">Twój adres email:</label><br>
                <input type="email" v-model="messeage.email" class="generalSet" id="email" /><br>
                <div class="error">{{emailError}}</div><br>
                <label for="text">Treść wiadomości:</label><br>
                <textarea id="text" v-model="messeage.content" class="generalSet" maxlength="3000" rows="20" /><br>
                <div class="error">{{contentError}}</div><br>
                <button @click.prevent="submit" class="sendButton">Wyślij</button> {{status}}
            </form>

</template>

<style scoped>
.generalSet {
    width: 660px;
    padding: 10px;
    resize: none;
    box-sizing: border-box;
}
.error {
    font-size: small;
    float: right;
}
.sendButton {
    padding: 10px;
    border: 0px;
    color: aliceblue;
    background-color: cornflowerblue;
}
</style>