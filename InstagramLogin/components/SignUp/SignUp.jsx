import './SignUp.css'

function SignUp(){
    return(
        <div>
            <div>
                <img src='./Logo.png' alt='Logo'/>
            </div>
            <div>
                <input type='text' placeholder='Mobile Number'/>
                <input type='text' placeholder='Full Name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='Password'/>
            </div>
            <div>Sign un</div>
            <div>Have an account? <span>Log in</span></div>
        </div>
    )
}
export default SignUp;