<template>
  <div class="page">
    <nuxt-link to="/" class="navigation">
      <img src="/svg/arrow_left.svg" alt="Powrót do strony głównej" class="icon">
    </nuxt-link>
    <div class="container">
      <div class="box">
        <h1 class="title">
          {{ drink.strDrink }}
        </h1>
        <details-list :details="details"/>
        <p class="ingredients-title">
          Składniki
          <img src="/svg/ingredients.svg" alt="Składniki" class="icon">
        </p>
        <ul class="ingredients">
          <li
            v-for="(ingredient, index) in ingredients"
            :key="`ingredient_${index}`"
            class="item"
          >
            - {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="box">
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink" class="image">
      </div>
    </div>
  </div>
</template>

<script>
  import { getIngredients } from '@/assets/js/utils'
  import DetailsList from '@/components/general/DetailsList'

  export default {
    name: 'PageDrink',
    components: { DetailsList },
    computed: {
      details () {
        return [
          {
            title: 'Tagi',
            description: this.drink.strTags
          },
          {
            title: 'Kategoria',
            description: this.drink.strCategory
          },
          {
            title: 'Nasycenie alkoholu',
            description: this.drink.strAlcoholic
          },
          {
            title: 'Rodzj szklanki',
            description: this.drink.strGlass
          },
          {
            title: 'Instrukcje przygotowania',
            description: this.drink.strInstructions
          }
        ]
      },
      ingredients () {
        return getIngredients(this.drink)
      }
    },
    async asyncData ({ app, error, params }) {
      const response = await app.$service.drinks.getDrinkById(params.id)
      if (response.drinks === null) {
        error({ status: 404, message: 'Nie znaleziono drinka!' })
      }
      const drink = response.drinks[0]

      return {
        drink
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @include mobile {
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  .box {
    &:first-child {
      margin-right: 20px;
    }
  }

  .title {
    @include font-primary(48px);
    margin-bottom: 30px;

    @include mobile {
      margin-top: 30px;
      font-size: 32px;
    }
  }

  .image {
    max-width: 380px;
    width: 100%;
    height: auto;
    border: 3px solid #010101;

    @include mobile {
      max-width: 240px;
    }
  }

  .details {
    max-width: 380px;
    width: 100%;

    /deep/ .title {
      margin-bottom: 10px;
    }
  }

  .ingredients-title {
    @include font-secondary(18px, $blue-dark);
    margin-top: 20px;
    font-weight: bold;

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
    }
  }
</style>
