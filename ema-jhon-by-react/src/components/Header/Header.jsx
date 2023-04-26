import React, { useContext } from 'react';
import './Header.css'
import logo from '../../../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogout =()=>{
        logOut()
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }
  
    return (
        <nav className='header'>
           <img src={logo} alt="" />
          <div>
           <Link to="/">shop</Link>
           <Link to="/orders">order</Link>
           <Link to="/inventory">inventory</Link>
           <Link to="/Login">Login</Link>
           <Link to="/signup">Sign UP</Link>
           {user && <span className='user'>{user.email}<button onClick={handleLogout} >Log out</button> </span> }
          </div>
        </nav>
    );
};

export default Header;