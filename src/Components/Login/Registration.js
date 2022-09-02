import React from 'react';
import { useForm } from "react-hook-form";
import image from "./Group 33092.png";
import UseAuth from './../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const [regError,setRegError]=useState('');

    const { user,authError, registerUser,} = UseAuth();
    const navigation = useNavigate();
    const location = useLocation();

    const onSubmit = data => {
        if(data.password.length>=6 || data.confirmPassword.length>=6){
            if(data.password===data.confirmPassword){
                registerUser(data.email, data.password,data.name, navigation,location);
                setRegError('');
            }
            else{
                setRegError('Passwords do not match!');
            }
        }
        else{
            setRegError('Length of the passwords should be more than 5!');
        }
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
                                <h3>Please<span style={{ color: 'hotpink' }}> Register</span></h3>
                                <input type="text" placeholder="Input Name" {...register("name", { required: true })} />
                                <br />
                                <input type="email" placeholder="Input Email" {...register("email", { required: true })} />
                                <br />
                                <input type="password" placeholder="Input Password" {...register("password", { required: true })} />
                                <br />
                                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true })} />
                                <br />
                                <input type="submit" />
                            </form>
                        </div>
                }
                </div>
            }
            <h6 className="text-danger">{authError}</h6>
            <h6 className="text-danger">{regError}</h6>
        </>
    );
};

export default Registration;