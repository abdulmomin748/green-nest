import { AuthContext } from '../AppContext/AppContext';

const AuthProvider = ({children}) => {
    
    const user = {
        name: 'rahman'
    }

    return (
        <AuthContext value={user}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;