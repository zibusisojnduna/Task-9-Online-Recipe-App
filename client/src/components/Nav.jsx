import { Link } from "react-router-dom"
function Navigation(){
    return(

            <ul style={{listStyleType:"none", margin:"0", padding:"0", overflow:"hidden", backgroundColor:"#002500"}}>

            
                <li style={{display:"block", color:"white", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
                    <Link to={"/"}>Home</Link>
                </li>

                <li style={{display:"block", color:"white", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
                    <Link to={"/recipie"}>Recipes</Link>
                </li>

                <li style={{display:"block", color:"white", textAlign:"center", padding:"2%", textDecoration:"none", float:"left"}}>
                    <Link to={"/privacy"}>Privacy</Link>
                </li>
            </ul>
        
    )
}
export default Navigation