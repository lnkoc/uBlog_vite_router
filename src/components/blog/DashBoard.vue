<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';

const emit = defineEmits('logout');
const router = useRouter();

function create() {
    router.replace('/dashboard/create');
}
function list() {
    router.replace('/dashboard/list');
}
function edit(id) {
    console.log("edytuj artykuł o id " + id);
    router.replace({ path: '/dashboard/edit/' + id, params: {id}});
}

function logout() {
    axios.get('/logout', {withCredentials: true})
        .then((res) => {
            console.log(`wylogowano ${res}`);
        });
    emit('logout');
}
</script>

<template>
    <div class="dashBoardWrapper">
        <header>
            <div class="menu">
                <div class="desc">Panel administratora</div>
                <div class="menuItems">
                    <button @click="create()">Utwórz artykuł</button>
                    <button @click="list">Edycja artykułów</button>
                    <button @click="logout">Wyloguj</button>
                </div>
            </div>
        </header>
        <!-- <div class="content"> -->
            <RouterView @submited="list" @editArticle="edit" />
        <!-- </div> -->
    </div>
</template>

<style scoped>
.dashBoardWrapper {
    margin: auto;
    width: 720px;
    min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
}
.menu {
    height: 60px;
    width: 720px;
    background-color: rgb(69, 127, 236);
    position: sticky;
    top: 0px;
}
.desc {
    width: 200px;
    float: left;
    padding: 19px;
    color: aliceblue;
    font-size: 19px;
    font-weight: bold;
}
.menuItems {
    text-align: right;
    overflow: hidden;
}
.menuItems button {
    height: 60px;
    padding: 12px;
    background-color: rgb(69, 127, 236);
    color: aliceblue;
    border: 0px;
    border-left: 1px solid cornflowerblue;
    transition-duration: 0.4s;
}
.menuItems button:hover {
    background-color: aliceblue;
    color: rgb(69, 127, 236);
}
</style>