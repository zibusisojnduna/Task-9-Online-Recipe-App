function Landing(){
    return(
        <section style={{display:"flex"}}>
            <div>
            <h1 style={{color:"white", fontWeight:"bolder", fontSize:"xx-large"}}>Welcome to RECIPEACE,<br></br>if you want to be<br></br>at peace for your<br></br>meal plan, find a recipe.</h1>
                <div>
                    <button style={{backgroundColor:"#002500"}}>Login</button><br></br>
                    <h2 style={{color:"white"}}>or if yo don't have an account</h2><br></br>
                    <button style={{backgroundColor:"#002500"}}>Sign Up</button>
                </div>          
            </div>

            <div>
                <img src=".\src\assets\Mushroom-Risotto-12.jpg" style={{height:"50%"}}></img>
            </div>
           
        </section>
    )
}
export default Landing