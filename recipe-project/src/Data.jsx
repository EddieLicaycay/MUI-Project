import React, { useEffect, useState } from "react";

const Data = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipe();
  }, []);

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.name}</h3>
          <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          <p>Instructions: {recipe.instructions.join("\n")}</p>
          <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
          <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <p>Difficulty: {recipe.difficulty}</p>
          <p>Cuisine: {recipe.cuisine}</p>
          <p>Calories Per Serving: {recipe.caloriesPerServing}</p>
          <p>Tags: {recipe.tags.join(", ")}</p>
          <p>Meal Type: {recipe.mealType.join(", ")}</p>
          <img src={recipe.image} alt={recipe.name} />
          <p>Rating: {recipe.rating}</p>
          <p>Review Count: {recipe.reviewCount}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
