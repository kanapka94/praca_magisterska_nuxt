<template>
  <div class="page">
    <section class="search">
      <h2 class="title">
        Wyszukaj informacje na temat
      </h2>
      <radio-list v-model="form.option" :list="options"/>
      <search-bar
        v-model="form.text"
        placeholder="Wpisz nazwę..."
      />
    </section>
    <section class="lists">
      <p class="subtitle">Zobacz także <span class="focus">listy</span> filtrów</p>
      <link-component href="/lista/skladniki">
        Składniki
      </link-component>
      <link-component href="/lista/szklanki">
        Rodzaje szklanek
      </link-component>
      <link-component href="/lista/nasycenie">
        Nasycenie alkoholu
      </link-component>
      <link-component href="/lista/kategorie">
        Kategorie drinków
      </link-component>
    </section>
  </div>
</template>

<script>
  import SearchBar from '../components/home/SearchBar/index'
  import RadioList from '../components/general/RadioList/index'
  import LinkComponent from '../components/general/Link'

  export default {
    name: 'PageIndex',
    components: { LinkComponent, RadioList, SearchBar },
    data () {
      return {
        form: {
          text: '',
          option: ''
        },
        options: [
          {
            name: 'Drink',
            value: 'drink',
            group: 'searchType'
          },
          {
            name: 'Składnik',
            value: 'ingredient',
            group: 'searchType'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    @include font-primary(36px);
    margin-bottom: 20px;
  }

  .lists {
    margin-top: 60px;
  }

  .subtitle {
    @include font-primary;
    margin-bottom: 20px;
  }

  .focus {
    color: $pink;
  }

  .link {
    margin-right: 20px;
    margin-bottom: 10px;
  }
</style>
