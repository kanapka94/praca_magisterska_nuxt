const getIngredients = drink => {
  const ingredients = []
  for (let i = 0; i < 10; i++) {
    const ingredient = drink['strIngredient' + i]
    if (ingredient) ingredients.push(ingredient)
  }
  return ingredients
}

export {
  getIngredients
}
