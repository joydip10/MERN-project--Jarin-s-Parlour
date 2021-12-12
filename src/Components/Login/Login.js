import React from 'react';
import { useForm } from "react-hook-form";
import image from "./Group 33092.png";
import UseAuth from './../Hooks/UseAuth';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Login = () => {
    const { register, handleSubmit } = useForm();
    const { user, authError, loginUser, signInWithGoogle,} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = data => {
        loginUser(data.email, data.password, location,navigate);
    };
    return (
        <>
            {
                <div>
                    {
                        !user.email &&
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <img src={image} alt="" width='180px'></img>
                                    </div>
                                    <br />
                                    <h3>Please<span style={{ color: 'hotpink' }}> Login</span></h3>
                                    <input placeholder="Input Email" {...register("email", { required: true })} />
                                    <br />
                                    <input placeholder="Input Password" {...register("password", { required: true })} />
                                    <br />
                                    <input type="submit" />
                                </form>
                                <Button onClick={()=>signInWithGoogle(location,navigate)}>Google Sign in</Button>
                            </div>
                    }
                    <h6 className="text-danger">{authError}</h6>
                </div>
            }
        </>
    );
};

export default Login;