<template>
  <div class="page">
    <h1 class="title">
      Lista kategorii drinków według zawartości alkoholu
      <img src="/svg/magnificial.svg" alt="Nasycenie" class="title-icon">
    </h1>
    <p class="description">
      Kliknij na kategorię, aby wyszukać odpowiednie drinki
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <span @click="handleClick">
          {{ ingredient.strAlcoholic }}
        </span>
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

    &:hover {
      color: $pink;
    }
  }
</style>
