import './SignIn.css'

function SignIn(){
    return(
        <div className='LoginCard'>
            <div className='img'>
                <img 
                    src='https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png' height="100px" 
                    alt='Logo'/>
            </div>
            <div className='inputFields'>
                <input type='text' placeholder='Phone number, username or email'/>
                <input type='password' placeholder='Password'/>
            </div>
            <div className='btn'>Sign in</div>
            <div className='link'>Don't have an account? <span>Sign up</span></div>
        </div>
    )
}
export default SignIn;