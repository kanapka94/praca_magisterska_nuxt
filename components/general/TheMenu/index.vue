<template>
  <div class="container">
    <burger/>
  </div>
</template>

<script>
  import Burger from './Burger'
  export default {
    name: 'TheMenu',
    components: { Burger }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end; // todo: finish burger
  }

  .burger {
    right: 10px;
  }
</style>
