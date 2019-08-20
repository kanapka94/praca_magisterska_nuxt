<template>
  <div class="page">
    <nuxt-link to="/lista/skladniki" class="navigation">
      <img src="/svg/arrow_left.svg" alt="Powrót do strony głównej" class="icon">
    </nuxt-link>
    <img
      :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`"
      :alt="ingredient.strIngredient"
      class="image"
    >
    <p class="title">
      {{ ingredient.strIngredient }}
    </p>
    <p class="subheader">Opis</p>
    <p class="description">
      {{ ingredient.strDescription || 'Brak opisu' }}
    </p>
    <p class="subheader">Typ składnika</p>
    <p class="type">
      {{ ingredient.strType || 'Brak typu' }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'PageIngredient',
    async asyncData ({ app, params, error }) {
      const response = await app.$service.ingredients.getIngredientById(params.id)
      if (response.ingredients === null) {
        error({ status: 404, message: 'Nie znaleziono składnika!' })
      }
      const ingredient = response.ingredients[0]

      return {
        ingredient
      }
    }
  }
</script>

<style lang="scss" scoped>
  .subheader {
    @include font-primary(16px);
    margin: 20px 0 10px;
  }

  .image {
    display: block;
    margin: 20px auto;
    border: 4px solid #000;
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
