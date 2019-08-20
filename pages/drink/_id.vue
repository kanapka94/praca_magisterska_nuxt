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
  .navigation {
    display: block;
    margin-bottom: 20px;
  }

  .icon {
    width: 48px;
    height: 48px;
    transition: all .3s cubic-bezier(0.77,0.2,0.05,1.0);

    &:hover {
      transform: scale(1.02);
    }
  }

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

  .ingredients {

  }
</style>
