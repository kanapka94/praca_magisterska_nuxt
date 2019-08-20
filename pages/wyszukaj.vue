<template>
  <div class="page">
    <h1 class="title">
      Znalezionych
      <span class="number">{{ drinksNumber }}</span>
    </h1>
    <!--    <p class="subtitle">-->
    <!--      Wybierz kryterium wyszukiwania-->
    <!--    </p>-->
    <!--    <radio-list v-model="form.criteria" :list="searchCriteraOptions"/>-->
    <search-bar
      v-model="form.text"
      :placeholder="placeholder"
      @search="handleSearch"
    />
    <search-results :drinks="drinks"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  // import RadioList from '../components/general/RadioList/index'
  import SearchBar from '@/components/home/SearchBar/index'
  import SearchResults from '@/components/search/SearchResults/index'

  const PLACEHOLDERS = {
    name: 'Wpisz nazwę drinka',
    id: 'Wpisz id drinka',
    ingredient: 'Wpisz nazwę składnika',
    glass: 'Wpisz nazwę szklanki',
    alcohol: 'Wpisz nazwę nasycenia alkoholu',
    category: 'Wpisz nazwę kategorii'
  }

  export default {
    name: 'PageSearch',
    components: { SearchResults, SearchBar },
    data () {
      return {
        form: {
          text: '',
          criteria: 'name'
        }
        // searchCriteraOptions: [
        //   {
        //     name: 'Nazwa',
        //     value: 'name',
        //     group: 'searchCriteria'
        //   },
        //   {
        //     name: 'Numer id',
        //     value: 'id',
        //     group: 'searchCriteria'
        //   },
        //   {
        //     name: 'Nazwa składnika',
        //     value: 'ingredients',
        //     group: 'searchCriteria'
        //   },
        //   {
        //     name: 'Nazwa szklanki',
        //     value: 'glasses',
        //     group: 'searchCriteria'
        //   },
        //   {
        //     name: 'Nasycenie',
        //     value: 'alcohol',
        //     group: 'searchCriteria'
        //   },
        //   {
        //     name: 'Kategoria drinka',
        //     value: 'categories',
        //     group: 'searchCriteria'
        //   }
        // ]
      }
    },
    computed: {
      ...mapState({
        drinks: state => state.drinks
      }),
      drinksNumber () {
        return this.$store.state.drinks.length
      },
      placeholder () {
        return PLACEHOLDERS[this.form.criteria || 'name']
      }
    },
    async asyncData ({ query, store }) {
      const payload = {
        value: query.wartosc,
        criteria: query.kryterium
      }
      await store.dispatch('fetchDrinks', payload)
      store.commit('SET_LOADING', false)
    },
    methods: {
      async handleSearch () {
        const query = {
          wartosc: this.form.text,
          kryterium: this.form.criteria
        }
        this.$router.replace({ path: '/wyszukaj', query })
        await this.$store.dispatch('fetchDrinks', {
          value: query.wartosc,
          criteria: query.kryterium
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    @include font-primary(32px);
  }

  .number {
    color: $pink;
  }

  .subtitle {
    @include font-primary;
    margin-top: 20px;
  }

  .radio-list {
    margin-top: 20px;
  }
</style>
