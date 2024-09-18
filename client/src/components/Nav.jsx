import { Link } from "react-router-dom"
function Navigation(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"/recipie"}>Recipes</Link>
                </li>

                <li>
                    <Link to={"/privacy"}>Privacy</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation