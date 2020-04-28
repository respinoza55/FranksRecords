<template>
  <div id="app">
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>

  .input:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  #app {
    padding: 20px;
  }

  button {
    background: #009435;
    border: 1px solid #009435;
    margin: 10px;
  }

  h1 {
    text-align: center;
    padding-bottom: 40px;
    padding-top: 20px;
  }
  
  td {
    padding: 20px;
    padding-left: 0px;
    font-size: 20px;
  }

</style>
