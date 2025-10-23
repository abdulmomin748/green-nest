import React from 'react';
import AuthProvider from './AuthProvider';
import { PlantsDataContext } from '../AppContext/AppContext';

const RootProvider = ({children, plantsData}) => {
    return (
        <PlantsDataContext value={plantsData}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </PlantsDataContext>
    );
};

export default RootProvider;