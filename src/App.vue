<template>
  <div id="app">
    <header>
      <div class="navi">
        <div class="logo">Inquiry</div>
        <ul class="menu">
          <li><router-link to="/">input</router-link></li>
          <li><router-link to="/list">list</router-link></li>
        </ul>
      </div>
    </header>
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
}
</style>
