import { useState } from "react"
import { Link } from "react-router-dom"

function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http//localhost:3000/users",{
            params:{email, password}
        })

        if(response.data.length > 0){
            alert("Login successful!")
        }else {
            setError("Invalid credemtials")
        }
    }
    return(
        <section style={{textAlign:"center"}}>

            <h1>Login</h1>

            <p style={{color:'white'}}>Welcome back! Please login to your account.</p><br></br>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required style={{margin:"2%", borderRadius:"10px"}}></input><br></br>
                <input type="text" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{margin:"2%", borderRadius:"10px"}}></input><br></br>
                <button style={{backgroundColor:"#002500", color:"white", padding:"1%", borderRadius:"25%", margin:"2%"}}>Login</button>
            </form>
            <p style={{color:"white"}}>Do you not have an account? <Link to={"/Signup"} style={{color:"black"}}>Sign Up</Link></p>
        </section>
    )
}
export default Login