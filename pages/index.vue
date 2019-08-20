<template>
  <div class="page">
    <random-drink :drink="drink"/>
    <section class="search">
      <h2 class="title">
        Wyszukaj informacje na temat drinka
        <img src="/svg/magnificial.svg" alt="Drink" class="title-icon">
      </h2>
      <search-bar
        v-model="text"
        placeholder="Wpisz nazwę drinka..."
        @search="handleSearch"
      />
    </section>
    <p class="info">
      Wersja językowa wyszukiwarki: język angielski
    </p>
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
  import LinkComponent from '../components/general/Link'
  import RandomDrink from '../components/home/RandomDrink/index'

  export default {
    name: 'PageIndex',
    components: { RandomDrink, LinkComponent, SearchBar },
    data () {
      return {
        text: ''
      }
    },
    async asyncData ({ app }) {
      const response = await app.$service.drinks.getRandom()
      return {
        drink: response.drinks[0]
      }
    },
    methods: {
      handleSearch () {
        const query = {
          wartosc: this.text,
          kryterium: 'name'
        }
        this.$router.push({ path: '/wyszukaj', query })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    position: relative;
  }

  .random-drink {
    position: absolute;
    top: 0;
    right: 10px;

    @include tablet {
      display: none;
    }
  }

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info {
    @include font-secondary(12px);
    text-align: center;
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
