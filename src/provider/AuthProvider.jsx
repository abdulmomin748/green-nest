import { useEffect, useState } from 'react';
import { AuthContext } from '../AppContext/AppContext';
import { createUserWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';
const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const crateUserEP = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const signInEmailPassword = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOutUser = () => {
        return signOut(auth);
    }

    const userInfo = {
        user,
        crateUserEP,
        signInGoogle,
        signInEmailPassword,
        logOutUser
    }
    return (
        <AuthContext value={ userInfo }>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;