import React, { useState } from 'react';
import Login from './Login';
import  {Box}  from '@mui/material';
import Registration from './Registration';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from './../Shared/Footer/Footer';

const LoginOrRegistration = () => {
    const [reg, setReg] = useState(false);
    return (
        <div>
            <Navigation/>
            <Box>
                {
                    (reg === false) &&
                    <div className="text-center">
                        <Login />
                        <br />
                        <h6>Not registered?<span style={{ color: 'hotpink', cursor: 'pointer' }} onClick={() => setReg(true)}>Create Account</span></h6>
                    </div>
                }
                {
                    (reg === true) &&
                    <div className="text-center">
                        <Registration />
                        <br />
                        <h6>Registered?<span style={{ color: 'hotpink', cursor: 'pointer' }} onClick={() => setReg(false)}>Log in</span></h6>
                    </div>
                }
            </Box>
            <Footer></Footer>
        </div>
    );
};

export default LoginOrRegistration;