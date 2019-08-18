<template>
  <div class="container">
    <nuxt-link to="/">
      <img src="/svg/logo.svg" alt="Praca magisterska" class="logo">
    </nuxt-link>
    <burger v-model="opened"/>
    <sidebar :opened="opened" @click="opened = false"/>
  </div>
</template>

<script>
  import Burger from './Burger'
  import Sidebar from './Sidebar'

  export default {
    name: 'TheMenu',
    components: { Sidebar, Burger },
    data () {
      return {
        opened: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    width: 64px;
    height: 64px;
    padding: 10px;
  }

  .burger {
    top: 10px;
    right: 10px;
    z-index: 5;
  }
</style>
