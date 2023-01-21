<script setup>
import { RouterLink } from 'vue-router';
import axios from 'axios';
const emit = defineEmits(["loadComponent", "logout"]);

function loadComponent() {
    console.log("przeładowywuję komponenty");
    emit("loadComponent");
}

function logout() {
    axios.get('/logout', {withCredentials: true})
        .then((res) => {
            console.log(`wylogowano header ${res.data}`);
            emit("logout");
        });
}
</script>

<template>
    <header>
        <div class="menuWrapper">
            <div class="desc">Panel</div>
            <nav class="menuItems" @click.prevent="loadComponent">
                <RouterLink to="/admin/dashboard"><div>Podsumowanie</div></RouterLink>
                <RouterLink to="/admin/create"><div>Utwórz artykuł</div></RouterLink>
                <RouterLink to="/admin/list"><div>Edycja artykułów</div></RouterLink>
                <div class="logout" @click="logout">Wyloguj</div>
            </nav>
        </div>
    </header>
</template>

<style>
header {
  top: 0px;
  position: sticky;
  width: 100%;
  background-color: cornflowerblue;
  z-index: 1;
}

.menuWrapper {
  width: 720px;
  height: 60px;
  margin: auto;
  overflow: hidden;
  background-color: rgb(69, 127, 236);
}
nav {
  height: 60px;
  padding: 5px 0px 0px 0px;
  border: 0px;
  float: right;
  text-align: right;
  overflow: hidden;
}
nav div {
    float: left;
    padding: 17px 12px 21px 12px;
    margin: auto;
    background-color: rgb(69, 127, 236);
    color: aliceblue;
    border: 0px;
    transition-duration: 0.4s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
nav div:hover {
    background-color: aliceblue;
    color: rgb(69, 127, 236);
}
.desc {
    width: 100px;
    float: left;
    padding: 19px;
    color: aliceblue;
    font-size: 19px;
    font-weight: bold;
}
.logout {
    cursor: pointer;
}
</style>
