function Card({recipe}){
    return(
        <div>
            <div style={{backgroundColor:"#EDCBB1", borderRadius:"5%", padding:"2%", margin:"2%", width:"25%", boxShadow:"0 2% 5% rgba(0, 0, 0, 0.1)" }}>
                {recipe.image}
            </div>
            <h2>{recipe.name}</h2>
            <h3>Ingredients:{recipe.indgredients}</h3>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
        </div>
    )
}
export default Card