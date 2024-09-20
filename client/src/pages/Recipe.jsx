import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/card"

function Recipe(){
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect (() => {
        const fetchRecipes = async () => {
            try{
                const response = await axios.get("http://localhost:3000/recipes")
                setRecipes(response.data)
            } catch (error) {
                setError("Error fetching recipes")
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchRecipes()
    }, []) 
    return(
        // <div>
        //     {recipes.map((recipes) => (
        //        <Card key={rec} 
        //     ))}
        // </div>
        <></>
    )
}
export default Recipe