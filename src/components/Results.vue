<template>
  <div id="results">
    <Form @submit="onSearch" style="font-size: 20px" :userName="userName"/>
    <template v-if="loading">
      <div>loading...</div>
    </template>
    <template v-else-if="error">
      <div id="error_container">
        <h1>Usuário não encontrado</h1>
        <img src="../assets/error.png" id="error_img"/>
      </div>
    </template>
    <article class="show_user" v-else>
      <User :user="user"/>
      <Repos :repos="repos"/>
    </article>
  </div>  
</template>

<script>
import Form from './Form'
import User from './User'
import Repos from './Repos'
import Points from '../services/points'
export default {
  name: 'resultsPage',
  components: {
    Form,
    User,
    Repos
  },
  data() {
    return {
      loading: true,
      error: null,
      repos: [],
      user: {},
    }
  },
  computed: {
    userName() {
      return this.$route.params.userName
    }
  },
  watch: {
    userName() {
      this.getData()
    }
  },
  methods: {
    getData(){
      this.loading = true
      this.error = null
      Promise.all([
        Points.userName(this.userName),
        Points.repositories(this.userName)
      ]).then(values => {
        const user = values[0].data
        const repos = values[1].data

        this.user = user
        this.repos = repos
      }).catch(error => {
        if (error.response) {
          switch (error.response.status) {
            case 404 : 
              this.error = 'Usuário não encontrado!'
              break
            default: 
              this.error = 'erro inesperado.'
          }
        } else {
          this.error = 'conexão perdida'
        }
      }).finally(() => {
        this.loading = false
      })
    },
    onSearch(userName) {
      this.$router.push({
        name: 'resultsPage',
        params: {
          userName
        }
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
  .show_user{
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 54px;
  }
  #results{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #error_container{
    width: 600px;
    height: 450px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #error_container h1{
    font-size: 36px;
    display: block;
    margin-block-start: 4rem;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-family: Roboto Mono;
    font-style: normal;
  }
  #error_container #error_img{
    width: 500px;
    height: 90%;
  }
  </style>