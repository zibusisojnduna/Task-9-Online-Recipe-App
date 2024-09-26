import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/card"

function Recipe(){
    const [recipes, setRecipes] = useState([])
    const [categories] = useState(["breakfast", "lunch", "dinner", "dessert"])

    useEffect(() => {
        const fetchRecipies = async () => {
            const response = await axios.get("hhtp://localhost:3000/recipies")
            setRecipes(response.data)
        }
        fetchRecipies()
    }, [])
    return(
        <section style={{display:"flex"}}>
            <h1>Recipes</h1>
            <div>
                <h1>Breakfast</h1>
                {categories.map(category => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          {recipes
            .filter(recipe => recipe.category === category)
            .map(recipe => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
        </div>
      ))}
            </div>

            <div>
                <h1>Lunch</h1>
                {categories.map(category => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          {recipes
            .filter(recipe => recipe.category === category)
            .map(recipe => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
        </div>
      ))}
            </div>

            <div>
                <h1>Dinner</h1>
                {categories.map(category => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          {recipes
            .filter(recipe => recipe.category === category)
            .map(recipe => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
        </div>
      ))}
            </div>

            <div>
                <h1>Dessert</h1>
                {categories.map(category => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          {recipes
            .filter(recipe => recipe.category === category)
            .map(recipe => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
        </div>
      ))}
            </div>
        </section>
           
        
    )
}
export default Recipe