<template>
  <div id="homePage">
    <Form @submit="onSearch" style="font-size: 36px"/>
  </div>
</template>

<script>
import Form from "./Form"
export default {
  name: 'home',
  components: {
    Form
  },
  methods: {
    onSearch(userName) {
      this.$router.push({
        name: 'resultsPage',
        params: {
          userName
        }
      })
    }
  }
}
</script>

<style scoped>
  #search{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 35vh auto 0px auto;
  }
</style>
