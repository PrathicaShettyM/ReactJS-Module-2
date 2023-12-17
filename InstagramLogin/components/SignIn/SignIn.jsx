import './SignIn.css'

function SignIn(){
    return(
        <div className='LoginCard'>
            <div>
                <img src='./Logo.png' alt='Logo'/>
            </div>
            <div>
                <input type='text' placeholder='Phone number, username or email'/>
                <input type='password' placeholder='Password'/>
            </div>
            <div>Sign in</div>
            <div>Don't have an account? <span>Sign up</span></div>
        </div>
    )
}
export default SignIn;