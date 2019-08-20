<template>
  <div class="page">
    Ingredient
    <pre> {{ ingredient }}</pre>
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

</style>
