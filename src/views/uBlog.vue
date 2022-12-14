<!-- <script setup>



</script> -->

<template>
  <div class="wrapper">
    <div class="content">
        <h2>μBlog</h2>
        <div v-if="showList">
            <template v-for="item in list" :key="item.ID">
                <div class="articles">
                    <div class="title">{{item.TITLE}}</div><br>
                    {{item.CREATED}}<br><br>
                    {{item.INTRO}}<br><br>
                    <button class="openButton" @click="loadArticle(item.ID, item.CREATED)">Czytaj całość</button>
                </div><br>
            </template>
        </div>
        <RouterView v-else :articleId="openId" @close="closed" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            list: [],
            showList: true,
            openId: "",
            toggle: true
        }
    },
    created() {
        console.log("uBlog created ----------");
        this.refresh();
    },
    methods: {
        refresh() {
            axios.get('/getList')
            .then((res) => {
                this.list = res.data;
                for (let i in this.list) {
                    let date = this.list[i].CREATED.slice(0,10).split("-").reverse().join("-");
                    this.list[i].CREATED = date;

                }
            });
        },
        loadArticle(id, created) {
            this.openId = id;
            this.$router.push('/articles/' + created);
            this.showList = false;
        },
        closed() {
            this.openId = "";
            this.showList = true;
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 720px;
    margin: auto;
    min-height: 92vh;
    background-color: rgba(255, 255, 255, 0.7);
}
.content {
    padding: 30px;
}
.articles {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.75);
}
.title {
    font-size: 1.2em;
    font-weight: bold;
}
.openButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}
</style>