<template>
  <div class="page">
    <nuxt-link to="/lists/ingredients" class="navigation">
      <img src="/svg/arrow_left.svg" alt="Return to ingredients list" class="icon">
    </nuxt-link>
    <img
      :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`"
      :alt="ingredient.strIngredient"
      class="image"
    >
    <p class="title">
      {{ ingredient.strIngredient }}
    </p>
    <p class="subheader">Description</p>
    <p class="description">
      {{ ingredient.strDescription || 'No description' }}
    </p>
    <p class="subheader">Cocktail type</p>
    <p class="type">
      {{ ingredient.strType || 'No type' }}
    </p>
    <p class="subheader">
      A list of drinks containing this ingredient
    </p>
    <drinks-list :drinks="drinks"/>
  </div>
</template>

<script>
  import DrinksList from '@/components/general/DrinksList'
  export default {
    name: 'PageIngredient',
    head () {
      return {
        title: `Ingredient Details - ${this.ingredient.strIngredient} - FunnyDrinks`,
        meta: [
          { hid: 'description', name: 'description', content: 'Read the information about the ingredient and select the most interesting ones to include in your drinks with great accuracy!' },
          { hid: 'og:title', property: 'og:title', content: `Ingredient Details - ${this.ingredient.strIngredient} - FunnyDrinks` },
          { hid: 'og:description', property: 'og:description', content: 'Read the information about the ingredient and select the most interesting ones to include in your drinks with great accuracy!' }
        ]
      }
    },
    components: { DrinksList },
    async asyncData ({ app, params, error }) {
      let response = await app.$service.ingredients.getIngredientByName(params.id)
      if (response.ingredients === null) {
        response = await app.$service.ingredients.getIngredientById(params.id)
        if (response.ingredients === null) {
          error({ status: 404, message: 'Ingredient not found!' })
        }
      }
      const ingredient = response.ingredients[0]

      const filteredDrinks = await app.$service.filter.ingredients(ingredient.strIngredient)
      const drinks = filteredDrinks.drinks

      return {
        ingredient,
        drinks
      }
    }
  }
</script>

<style lang="scss" scoped>
  .subheader {
    @include font-primary(18px, $pink);
    margin: 40px 0 20px;
  }

  .image {
    max-width: 380px;
    width: 100%;
    height: auto;
    display: block;
    margin: 20px auto;
    border: 3px solid #010101;

    @include mobile {
      max-width: 240px;
    }
  }

  .title {
    @include font-primary(48px);
    margin-bottom: 15px;

    @include mobile {
      font-size: 32px;
    }
  }

  .description {
    line-height: 22px;

    &:first-letter {
      @include font-primary(32px, $violet);
    }
  }
</style>
