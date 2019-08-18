<template>
  <div class="page">
    <h1 class="title">
      Lista składników
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
        <span @click="handleClick">
          {{ ingredient.strIngredient1 }}
        </span>
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

    &:hover {
      color: $pink;
    }
  }
</style>
