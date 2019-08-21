<template>
  <div class="page">
    <h1 class="title">
      List of categories of drinks by alcohol content
      <img src="/svg/magnificial.svg" alt="Magnifying glass" class="title-icon">
    </h1>
    <p class="description">
      Click on a category to find suitable drinks
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <nuxt-link
          :to="`/search?query=${ingredient.strAlcoholic}&criteria=alcohol`"
          class="link"
        >
          {{ ingredient.strAlcoholic }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageSaturation',
    async asyncData ({ app }) {
      const response = await app.$service.getList.alcohol()
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
