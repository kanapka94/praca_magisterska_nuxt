<template>
  <div class="page">
    <h1 class="title">
      Lista składników
      <img src="/svg/ingredients.svg" alt="Składniki" class="title-icon">
    </h1>
    <p class="description">
      Kliknij na składnik, aby dowiedzieć się więcej na jego temat
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <nuxt-link :to="`/skladnik/${ingredient.strIngredient1}`" class="link">
          {{ ingredient.strIngredient1 }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageIngredients',
    async asyncData ({ app }) {
      const response = await app.$service.getList.ingredients()
      return {
        ingredients: response.drinks
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    @include font-primary(36px);
    margin-bottom: 10px;
  }

  .description {
    margin-bottom: 20px;
    color: $gray-dark;
  }

  .item {
    margin-bottom: 10px;
    cursor: pointer;

    .link {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: $pink;
      }
    }
  }
</style>
