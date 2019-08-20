<template>
  <div class="page">
    <h1 class="title">
      Lista kategorii drinków
      <img src="/svg/category.svg" alt="Kategorie" class="title-icon">
    </h1>
    <p class="description">
      Kliknij na kategorię, aby wyszukać drinki z danej kategorii
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <span @click="handleClick">
          {{ ingredient.strCategory }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageCategories',
    async asyncData ({ app }) {
      const response = await app.$service.getList.categories()
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
