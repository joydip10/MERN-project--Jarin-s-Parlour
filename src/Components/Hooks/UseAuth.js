import React, { useContext } from 'react';
import { authcontext } from '../AuthProvider/AuthProvider';

const UseAuth = () => {
    return useContext(authcontext);
};

export default UseAuth;