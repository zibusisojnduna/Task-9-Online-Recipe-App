import { Link } from "react-router-dom"

function Landing(){
    return(
        <section style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

            <div style={{width:"50%", padding:"5%",alignItems:"center"}}>
            <h1 style={{color:"white", fontWeight:"bolder", fontSize:"xx-large"}}>Welcome to RECIPEACE,<br></br>if you want to be<br></br>at peace for your<br></br>meal plan, find a recipe.</h1><br></br>
            <button style={{backgroundColor:"#002500", color:"white", borderRadius:"20%", padding:"5%"}}><Link to={"/Login"}>Login</Link></button><br></br>             
            </div>

            <div  style={{width:"50%"}}>
                <img src=".\src\assets\Mushroom-Risotto-12.jpg" style={{height:"50%"}}></img>
            </div>
           
        </section>
    )
}
export default Landing