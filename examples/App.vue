<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>
      A Tree Plugin For Vue2
    </h1>
    <router-nav/>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  div{
    display: block;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #EEE;
    font-size: 14px;
  }

  table th {
    background: #EEE;
    border-bottom: 1px solid #CCC;
    padding: 4px;
  }

  table td {
    border: 1px solid #EEE;
    padding: 4px;
  }
  .icon-state-default {
    color: gray;
  }
  .icon-state-danger {
    color: red;
  }
  .icon-state-warning {
    color: yellow;
  }
  .icon-state-success {
    color: green;
  }

  .nav-panel {
    justify-content: center;
  }

</style>
