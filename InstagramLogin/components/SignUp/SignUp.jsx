import './SignUp.css'

function SignUp(){
    return(
        <div className='LoginCard'>
            <div className='img'>
                <img 
                    src='https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png' 
                    height="100px" 
                    alt='Logo'/>
            </div>
            <div className='inputFields'>
                <input type='text' placeholder='Mobile Number'/>
                <input type='text' placeholder='Full Name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='Password'/>
            </div>
            <div className='btn'>Sign up</div>
            <div className='link'>Have an account? <span>Log in</span></div>
        </div>
    )
}
export default SignUp;