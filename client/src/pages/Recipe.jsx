import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/card"

function Recipe(){
    const [recipes, setRecipes] = useState([])
    const [categories] = useState(["breakfast", "lunch", "dinner", "dessert"])
    const [searchTerm, setSearchTerm] = useState()

    useEffect(() => {
        const fetchRecipies = async () => {
            const response = await axios.get("hhtp://localhost:3000/recipies")
            setRecipes(response.data)
        }
        fetchRecipies()
    }, [])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase())
    }

    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm)
    )

    return(
        <section>
            <input type="text" placeholder="Search for a recipe" value={searchTerm} onChange={handleSearchChange} style={{padding:"2%", marginBottom:"2%", border:"2% solid black", borderRadius:"5px", width:"100%"}}></input>
            <button onClick={() => setSearchTerm()}>Clear</button>
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