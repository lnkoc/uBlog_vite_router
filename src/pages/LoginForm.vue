<script setup>

import axios from "axios";
import { reactive, ref } from 'vue';

const emit = defineEmits("authenticated");
const loginData = reactive({
    nickName: "",
    pass: ""
});
const response = ref("");
const waitCounter = ref(0);

function logIn() {
    let firstLetter = loginData.pass.charAt(0);
    let lastLetter = loginData.pass.charAt(loginData.pass.length - 1);
    axios.get('/loginFirst', { params: {
        login: loginData.nickName,
        first: firstLetter,
        last: lastLetter
    }}, {withCredentials: true})
    .then(() => {
       getSession();
    })
    .catch((err) => {
        console.log(err);
        waitCounter.value = 15;
        wait();
    })
}

function wait() {
    response.value = "Poczekaj " + waitCounter.value + " sekund.";
    if (waitCounter.value > 0) {
        waitCounter.value--;
        setTimeout(() => {
            wait()
        }, 1000);
    }
    else {
        response.value = "Spróbuj ponownie się zalogować.";
    }
}

function getSession() {
    //TODO dopisać szyfrowanie hasła
    axios.get('/getCookie', { params: {
        login: loginData.nickName,
        pass: loginData.pass
    }}, {withCredentials: true})
    .then(() => {
        emit("authenticated");
    })
    .catch((err) => {
        console.log(err);
    })
}
</script>

<template>
    <form class="loginForm">
        <fieldset>
            <legend> Logowanie </legend>
            <label for="nickname"> Użytkownik </label><br>
            <input type="text" v-model="loginData.nickName" id="nickname" maxlength="25" > 
            <br><br>
            <label for="pass"> Hasło </label><br>
            <input type="password" v-model="loginData.pass" id="pass" maxlength="25">
            <br><br>
            <button class="myButton" @click.prevent="logIn">Zaloguj</button>
        </fieldset>
    </form>
        {{response}}
</template>

<style scoped>
.loginForm {
    display: flex;
    justify-content: center;
    align-items: center;
    height:45vh;
    color: rgb(69, 127, 236);
}
.loginForm legend {
    padding: 1em;
}
.loginForm fieldset {
    border: 1px solid aliceblue;
}
.loginForm label {
    font-size: 0.8em;
}
.loginForm input {
    padding: 10px;
    border: 1px solid cornflowerblue;
    outline: none;
}
.myButton {
    width: 200px;
    padding: 10px;
    border: 0px;
    color: aliceblue;
    background-color: cornflowerblue;
}

</style>