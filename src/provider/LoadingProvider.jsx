import React, { Children, useState } from 'react';
import { LoadingContext } from '../AppContext/AppContext';

const LoadingProvider = ({children}) => {

    const [loading,setLoading] = useState(true);
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    const loadingValue = {
        loading,
        startLoading,
        stopLoading
    }
    return (
        <LoadingContext value={ loadingValue }>
            {children}
        </LoadingContext>
    );
};

export default LoadingProvider;