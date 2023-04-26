import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const LogIn = () => {
    const [show, setShow] = useState(false)

const {logInUser, setUser} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
console.log(location);

const from = location.state?.from?.pathname || '/'

const handleLogin = event =>{
    event.preventDefault()

    const form = event.target;
    const email = form.email.value
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser.email)
        form.reset()
        navigate(from, {replace: true})
        
    })
    .catch(error=>{
        console.log(error);
    }
    )
}
    return (
        <div className='form-container'>
           <h2 className='form-title'>login</h2> 
           <form onSubmit={handleLogin}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input className='email-feild' type="email" name='email' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input className='password-feild' type={show ? "text": "password"} name='password' required />
                <p onClick={()=>setShow(!show)}><small>
                    {
                        show  ? <span>hide password</span> : <span>show password</span>
                    }
                    </small></p>
            </div>
            <input className='btn-submit' type="submit" value="Login" />
           </form>
           
        <p className='toggle-text'><small>New ti ema-jhon? <Link to='/signup'>Create new Account</Link> </small></p>
        </div>
    );
};

export default LogIn;