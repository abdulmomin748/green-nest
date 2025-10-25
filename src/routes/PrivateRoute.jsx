import React, { use } from 'react';
import { AuthContext } from '../AppContext/AppContext';
import { Navigate, useLocation,  } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading,user} = use(AuthContext);
    const location = useLocation();

    if(loading){
        if(loading){
        return <div className='flex justify-center items-center h-[500px]'>
                <div class="loader"></div>
            </div>
    
        }
    }
    
    if(!user){
       return <Navigate to={'/login'} state={location.pathname} />;
    }
    
    return children;

};

export default PrivateRoute;