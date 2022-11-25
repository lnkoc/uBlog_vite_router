<template>
    <div class="container">
        <div class="wrapper">
            <form class="loginForm">
                <fieldset>
                    <legend> Logowanie </legend>
                    <label for="nickname"> Użytkownik </label><br>
                    <input type="text" v-model="nickName" id="nickname" maxlength="25" autofocus> 
                    <br><br>
                    <label for="pass"> Hasło </label><br>
                    <input type="password" v-model="pass" id="pass" maxlength="25">
                    <br><br>
                    <button class="myButton" @click.prevent="logIn">Zaloguj</button>
                </fieldset>
            </form>
        {{resp}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginForm',
    data() {
        return {
            nickName: "",
            pass: "",
            resp: "",
            counter: "",
            logged: false
        }
    },
    methods: {
        logIn() {
            let firstLetter = this.pass.charAt(0);
            let lastLetter = this.pass.charAt(this.pass.length - 1);
            axios.get('/login', { 
                params :{ 
                    login: this.nickName,
                    first: firstLetter,
                    last: lastLetter,

                }}, {withCredentials: true})
                .then((res) => {
                    this.resp = res.data;
                    // console.log("pierwsze ciastko");
                    this.getSession();
                })
                .catch((err) => {
                    console.log(err);
                    this.counter = 15;
                    this.wait();
                })
        },
        wait() {
            this.resp = "Poczekaj " + this.counter + " sekund(y).";
            if (this.counter > 0) {
                this.counter--;
                setTimeout(this.wait, 1000);
            }
            else {
                this.resp = "Spróbuj ponownie się zalogować";
            }
        },
        getSession() {
            //todo dopisać zabezpieczenie hasła
            axios.get('/getCookie', {
                params: {
                    pass: this.pass
                }}, {withCredentials: true})
                .then((res) => {
                    // console.log("drugie ciastko");
                    this.resp = res.data;
                    this.logged = true;
                    this.$emit('authenticated');
                })
                .catch((err) => {
                    console.log(err);
                })
        } 
    }

}
</script>

<style scoped>
.container {
    /* position: relative; */
    min-height: 100vh;
}
.wrapper {
    margin: 0%;
    width: 720px;
    height: 50vh;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.7);
}
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
}
.myButton {
    width: 200px;
    padding: 10px;
    border: 0px;
    color: aliceblue;
    background-color: cornflowerblue;
}

</style>