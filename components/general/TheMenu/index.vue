<template>
  <div class="container">
    <burger @click="burgerClick"/>
    <sidebar :opened="opened"/>
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
        opened: true
      }
    },
    methods: {
      burgerClick (value) {
        this.opened = value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
  }

  .burger {
    top: 10px;
    right: 10px;
    z-index: 5;
  }
</style>
