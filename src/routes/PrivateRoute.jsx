import React, { use } from 'react';
import { AuthContext } from '../AppContext/AppContext';
import { Navigate, useLocation,  } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading,user} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <p className='text-5xl text-red'>Loading ...............</p>
    }
    if(!user){
       return <Navigate to={'/login'} state={location.pathname} />;
    }
    
    return children;

};

export default PrivateRoute;