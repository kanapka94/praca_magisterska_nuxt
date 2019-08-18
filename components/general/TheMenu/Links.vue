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
      <p class="title">Listy</p>
      <ul>
        <li class="item">
          <link-component href="/lista/skladniki">
            Składniki
          </link-component>
        </li>
        <li class="item">
          <link-component href="/lista/szklanki">
            Szklanki
          </link-component>
        </li>
        <li class="item">
          <link-component href="/lista/nasycenie">
            Nasycenie
          </link-component>
        </li>
        <li class="item">
          <link-component href="/lista/kategorie">
            Kategorie
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
    padding: 40px 30px;
    float: right;
    background-color: #fff;
  }

  .links {
    @include font-primary(22px);
  }

  .title {
    margin: 20px 0;
  }

  .link {
    display: block;
    margin-left: 15px;
    margin-bottom: 10px;
  }
</style>
