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
        <nuxt-link
          :to="`/wyszukaj?wartosc=${ingredient.strCategory}&kryterium=categories`"
          class="link"
        >
          {{ ingredient.strCategory }}
        </nuxt-link>
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

    .link {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: $pink;
      }
    }
  }
</style>
