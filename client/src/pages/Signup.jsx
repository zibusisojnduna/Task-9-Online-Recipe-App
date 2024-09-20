function SignUp(){
    return(
        <section style={{alignItems:"center", display:"flex"}}>
            <div style={{justifyContent:"center", alignItems:"center"}}>
                <h1 style={{color:"white", fontSize:"xxx-large"}}>Sign Up</h1>
                <p>Please enter the follwing details.</p>
                <input type="text" placeholder="Please enter your email address" style={{width:"50%", padding:"2%"}}></input><br></br>
                <input type="text" placeholder="Please enter your new password" style={{width:"50%", padding:"2%"}}></input><br></br>
                <input type="text" placeholder="PLease confirm your password" style={{width:"50%", padding:"2%"}}></input>

            </div>
        </section>
    )
}
export default SignUp