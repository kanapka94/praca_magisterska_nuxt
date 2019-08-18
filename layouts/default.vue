<template>
  <div>
    <the-menu/>
    <nuxt/>
    <the-footer/>
  </div>
</template>

<script>
  import TheMenu from '../components/general/TheMenu/index'
  import TheFooter from '../components/general/TheFooter'

  export default {
    components: {
      TheFooter,
      TheMenu
    }
  }
</script>

<style></style>
