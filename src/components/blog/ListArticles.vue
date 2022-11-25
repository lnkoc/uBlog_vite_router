<template>
  <div v-if="!edit" class="listContainer">
    <div>
      <div> 
        <h2>Lista artykułów</h2>
      </div>
      <div>
        <template v-for="item in list" :key="item.ID">
          <div class="item">
            <h3> {{item.TITLE}}</h3>
            <p> {{item.INTRO}}</p>
            <button @click.prevent="openArticle(item.ID)" class="editButton">Edytuj</button> <button @click.prevent="deleteArticle(item.ID)" class="deleteButton">Usuń</button>
          </div>
          <br><br>
        </template>
      </div>
    </div>
  </div>
  <RouterView v-else :articleId="editId" @edited="closeEdit" />
</template>

<script>
import axios from 'axios'
export default {
  name: "ListArticles",
  data() {
    return {
      list: [],
      edit: false,
      editId: ""
    }
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      axios.get("/getList", {withCredentials: true})
          .then((res) => {
            this.list = res.data;
          })
          .catch((err) => {
            console.log(err);
          })
    },
    openArticle(id) {
      this.$router.push('/dashboard/edit/' + id);
      this.editId = id;
      this.edit = true;     
    },
    closeEdit() {
      this.$router.push('/dashboard/list');
      this.edit = false;
      this.refresh();
    },
    deleteArticle(articleId) {
      axios.post('/deleteArticle', {
        params: {
          id: articleId
          }}, {withCredentials: true}
      )
      .catch((err) => {
        console.log(err);
      });
      this.refresh();
    }
  }
}
</script>

<style>
.listContainer {
  padding: 35px;
  min-height: 83vh;
}
.item {
  padding: 20px;
  background-color: aliceblue;
}
.editButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: cornflowerblue;
}
.deleteButton {
  padding: 10px;
  border: 0px;
  color: aliceblue;
  background-color: darkred;
}
</style>