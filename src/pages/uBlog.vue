<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const list = ref([]);
const showList = ref(true);
const openId = ref();

onMounted(() => {
    axios.get('/getList')
        .then((res) => {
            for (let item in res.data) {
                let date = res.data[item].CREATED.slice(0,10).split("-").reverse().join("-");
                res.data[item].CREATED = date;
                list.value.push(res.data[item]);
            }
        })
})
function loadArticle(id, created) {
    openId.value = id;
    showList.value = false;
    router.push('/articles/' + created);
}
function closed() {
    showList.value = true;
    openId.value = "";
    router.push('/');
}
</script>

<template>
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
</template>

<style scoped>
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