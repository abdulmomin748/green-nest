import React from 'react';
import AuthProvider from './AuthProvider';
import { PlantsDataContext } from '../AppContext/AppContext';
import LoadingProvider from './LoadingProvider';

const RootProvider = ({children, plantsData}) => {
    return (
        <PlantsDataContext value={plantsData}>
            <AuthProvider>
                <LoadingProvider>
                    {children}
                </LoadingProvider>
            </AuthProvider>
        </PlantsDataContext>
    );
};

export default RootProvider;