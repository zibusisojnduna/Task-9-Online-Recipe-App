import { useState } from "react"

function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("")
    }

    
    return(
        <section style={{textAlign:"center"}}>
            <form>
                <input type="text" placeholder="Enter Email Address" required></input><br></br>
                <input type="text" placeholder="Enter Password" required></input><br></br>
                <button style={{backgroundColor:"#002500"}}>Login</button>
            </form>
        </section>
    )
}
export default Login