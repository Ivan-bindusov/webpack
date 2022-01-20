<template>
  <div id="hello">
    <h2>Hello World!</h2>
    <p>{{ text }}</p>
    <input type="text" v-model="text" placeholder="write here">
    <p>Text: {{ text }}</p>
  </div>
</template>

<script>
export default{
  name: 'app',
  data(){
    return {
      text: 'Welcome to vue'
    }
  }
}
</script>

<style>
  #hello{
    color: brown;
  }
</style>
