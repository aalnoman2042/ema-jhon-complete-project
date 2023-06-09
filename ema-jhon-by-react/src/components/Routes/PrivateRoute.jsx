import React, {  useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);


        if(loading){
            return <div><p>loading....</p></div>
        }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>;
};

export default PrivateRoute;