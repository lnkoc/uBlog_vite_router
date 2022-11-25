<template>
    <div class="background">
        <header>
            <div class="menuWrapper">
                <div class="desc">Panel administratora</div>
                <div class="menu">
                    <button @click="create">Utwórz artykuł</button>
                    <button @click="list">Edycja artykułów</button>
                    <button @click="logout">Wyloguj</button>
                </div>
            </div>
        </header>
        <!-- <div class="content"> -->
            <RouterView @submited="list" />
        <!-- </div> -->
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: "MainForm",
    setup() {
        const router = useRouter();
        router.replace('/dashboard');  // /create
    },
    emits: [ 'logout' ],
    methods: {
        create() {
            this.$router.replace('/dashboard/create');
        },
        list() {
            this.$router.replace('/dashboard/list')

        },
        logout(){
            //TODO skasować ciasteczka
            this.$emit('logout');
        }
    }
}
</script>

<style scoped>
.background {
    margin: auto;
    width: 720px;
    min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
}
.menuWrapper {
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
.menu {
    text-align: right;
    overflow: hidden;
}
.menu button {
    height: 60px;
    padding: 12px;
    background-color: rgb(69, 127, 236);
    color: aliceblue;
    border: 0px;
    border-left: 1px solid cornflowerblue;
    transition-duration: 0.4s;
}
.menu button:hover {
    background-color: aliceblue;
    color: rgb(69, 127, 236);
}
</style>