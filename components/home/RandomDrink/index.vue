<template>
  <div class="random-drink">
    <div class="title">Random recipe</div>
    <nuxt-link :to="`/drink/${drink.idDrink}`">
      <img :src="drink.strDrinkThumb" alt="" class="image">
    </nuxt-link>
    <details-list :details="details"/>
  </div>
</template>

<script>
  import DetailsList from '../../general/DetailsList'
  import { getIngredients } from '@/assets/js/utils'

  export default {
    name: 'RandomDrink',
    components: { DetailsList },
    props: {
      drink: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      details () {
        const details = [
          {
            title: 'nazwa',
            description: this.drink.strDrink || '-'
          },
          {
            title: 'kategoria',
            description: this.drink.strCategory || '-'
          }
        ]

        const ingredients = getIngredients(this.drink)

        ingredients.forEach((el, index) => {
          details.push({
            title: index === 0 ? 'składniki' : '',
            description: `- ${el}`
          })
        })

        return details
      }
    }
  }
</script>

<style lang="scss" scoped>
  .random-drink {
    max-width: 200px;
  }

  .title {
    @include font-primary;
  }

  .image {
    width: 132px;
    height: 87px;
    margin: 20px auto;
    display: block;
    border: 2px solid #000;
  }
</style>
