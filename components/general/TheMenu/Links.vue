<template>
  <nav class="wrapper">
    <div class="links">
      <p class="title">Ogólne</p>
      <ul>
        <li class="item">
          <link-component href="/">
            Strona Główna
          </link-component>
        </li>
        <li class="item">
          <link-component href="/wyszukaj">
            Szukaj 🍹
          </link-component>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import LinkComponent from '../Link'
  export default {
    name: 'Links',
    components: { LinkComponent }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: 300px;
    width: 100%;
    height: 100vh;
    padding: 60px 30px;
    float: right;
    background-color: #fff;
  }

  .links {
    @include font-primary(22px);
  }

  .title {
    margin-bottom: 15px;
  }

  .link {
    display: block;
    margin-left: 15px;
    margin-bottom: 6px;
  }
</style>
