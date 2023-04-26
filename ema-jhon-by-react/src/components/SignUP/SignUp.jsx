import React, { useContext, useState } from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('')
        if(password !== confirm){
            setError('your password did not match')
            return
        }
        else if(password.length <6){
            setError('password must be in 6 words')
         return
        }

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>SignUp</h2> 
        <form onSubmit={handleSignUp} >
         <div className="form-control">
             <label htmlFor="email">Email</label>
             <input className='email-feild' type="email" name='email' required />
         </div>
         <div className="form-control">
             <label htmlFor="password">Password</label>
             <input className='password-feild' type="password" name='password' required />
         </div>
         <div className="form-control">
             <label htmlFor="confirm">Confirm Password</label>
             <input className='password-feild' type="password" name='confirm' required />
         </div>
         <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p className='toggle-text'><small>Already Have An Account? <Link to='/login'>Login</Link> </small></p>
        <p className='text-error'>{error}</p>
     </div>
    );
};

export default SignUp;