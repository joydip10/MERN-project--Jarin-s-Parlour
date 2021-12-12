import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";

const MakeAdmin = () => {
    const { register, handleSubmit,reset } = useForm();
    const [success,setSuccess]=useState('');
    const { token } = UseAuth();
    const onSubmit = data => {
       fetch(`https://murmuring-reaches-90581.herokuapp.com/users/admin`,{
           method:'PUT',
           headers:{
            'authorization': `Bearer ${token}`,
               'Content-type':'application/json'
           },
           body:JSON.stringify({email:data.email})
       }) 
       .then(res=>res.json())
       .then(data=>{
           if(data.modifiedCount>0){
               setSuccess('Successfully an admin has been made!');
               reset();
           }
       })
    };

    return (
        <div>
            <h3>Make Admin</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter Email" {...register("email",{required:true})} />
                <br/>
                <br/>
                <input type="submit" />
                <h6 className="text-success">{success}</h6>
            </form>
        </div>
    );
};

export default MakeAdmin;