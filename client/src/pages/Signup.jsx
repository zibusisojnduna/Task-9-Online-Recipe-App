function SignUp(){
    return(
        <section style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
            <div>
                <h1 style={{color:"white", fontSize:"xxx-large"}}>Sign Up</h1>
                <p style={{color:"white"}}>Please enter the follwing details.</p>
                <input type="text" placeholder="Enter your email address" style={{width:"100%", padding:"2%", margin:"5%", borderRadius:"15px"}}></input><br></br>
                <input type="text" placeholder="Enter your new password" style={{width:"100%", padding:"2%", margin:"5%", borderRadius:"15px"}}></input><br></br>
                <input type="text" placeholder="Confirm your password" style={{width:"100%", padding:"2%", margin:"5%", borderRadius:'15px'}}></input>

            </div>
        </section>
    )
}
export default SignUp