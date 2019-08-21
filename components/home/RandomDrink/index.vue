<template>
  <div class="random-drink">
    <div class="title">Random recipe</div>
    <nuxt-link :to="`/drink/${drink.idDrink}`">
      <img :src="drink.strDrinkThumb" alt="" class="image">
    </nuxt-link>
    <details-list :details="details"/>
    <p class="ingredients-title">
      Ingredients
      <img src="/svg/ingredients.svg" alt="Ingredients" class="title-icon">
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <nuxt-link :to="`/ingredient/${ingredient}`" class="link">
          {{ ingredient.name }}
          <span class="measure">{{ ingredient.measure }}</span>
        </nuxt-link>
      </li>
    </ul>
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
            title: 'Name',
            description: this.drink.strDrink || '-'
          },
          {
            title: 'Category',
            description: this.drink.strCategory || '-'
          }
        ]
        return details
      },
      ingredients () {
        return getIngredients(this.drink)
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

  .ingredients-title {
    @include font-secondary(16px, $violet);
    margin-top: 10px;

    .image {
      width: 32px;
      height: 32px;
    }
  }

  .ingredients {
    margin-top: 20px;
    font-weight: bold;

    .item {
      @include font-secondary(16px, $gray-dark);
      margin-top: 10px;
      cursor: pointer;
      transition: transform .3s;

      &:hover {
        transform: scale(1.02);
      }
    }

    .link {
      text-decoration: none;
      color: inherit;
    }

    .measure {
      color: $pink;
    }
  }
</style>
