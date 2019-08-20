<template>
  <div class="page">
    <h1 class="title">
      Lista rodzajów szklanek
      <img src="/svg/glasses.svg" alt="Rodzaje szklanek" class="title-icon">
    </h1>
    <p class="description">
      Kliknij na nazwę szklanki, aby znaleźć drinki pasujące do danej szklanki
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <nuxt-link
          :to="`/wyszukaj?wartosc=${ingredient.strGlass}&kryterium=glasses`"
          class="link"
        >
          {{ ingredient.strGlass }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageGlasses',
    async asyncData ({ app }) {
      const response = await app.$service.getList.glasses()
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
