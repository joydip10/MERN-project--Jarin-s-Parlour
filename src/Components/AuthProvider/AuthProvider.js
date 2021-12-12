import React, { createContext } from 'react';
import UseFirebase from './../Hooks/UseFirebase';
export const authcontext=createContext('');
const AuthProvider = ({children}) => {
    const allContext=UseFirebase();
    return (
        <authcontext.Provider value={allContext}>
            {children}
        </authcontext.Provider>
    );
};

export default AuthProvider;