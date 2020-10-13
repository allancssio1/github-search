<template>
  <div class="search" id="search">
    <h1>Github<span class="second_title">Search</span></h1>
    <form id="inputText" @submit.prevent="onSubmit">
      <input type="text" v-model="element">
      <button type="submit">
        <img src="../assets/search.png">
      </button>
      
    </form>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      element: ''
    }
  },
  methods: {
    onSubmit() {  
      this.$emit('submit', this.element)
    }
  },
  mounted() {
    this.element = this.userName
  }
}
</script>

<style scoped>
  
  .search{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 20px 4px;
  }
  .search h1{
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: bold;
  }
  h1 .second_title{
    font-family: Rubik;
    font-style: italic;
    margin-left: 32px;
    font-weight: 300;
  }
  #inputText{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;;
    width: 700px;
    height: 50px;
  }
  #inputText input{
    width: 85%;
    height: 100%;
    border: 2px solid black;
    box-sizing: border-box;
    font-size: 1.3rem;
    padding: auto 8px;
  }
  #inputText button{
    width: 15%;
    height: 100%;
    background-color: black;
    cursor: pointer;
    border: none;
  }
  #inputText button img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>