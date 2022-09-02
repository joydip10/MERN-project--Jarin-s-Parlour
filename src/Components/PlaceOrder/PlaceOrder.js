import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navigation from '../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import UseAuth from './../Hooks/UseAuth';
const PlaceOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const {user}=UseAuth();

    useEffect(() => {
        fetch(`https://murmuring-reaches-90581.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { _id, name, image, desc, price } = product;

    const onSubmit = data =>{
        const order = {item:name,image:image,desc:desc, price:price, name:user?.name, phone:data.phone, email:user?.email, address:data.address,status:'pending'};
        console.log(order);
        fetch('https://murmuring-reaches-90581.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Order has been successfully placed');
                reset();
            }
        })
    };
    return (
        <>
            <Navigation />
            <div className="text-center container d-flex flex-column flex-md-row align-items-center justify-content-center">
                <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`data:image/png;base64,${image}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Price {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {desc}
                        </Typography>
                    </CardContent>
                </Card>
                </div>
                <div className="px-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Enter Information for product delivery</h3>
                        <br/>
                        <input placeholder="Phone" {...register("phone",{required:true})} />
                        <br/>
                        <input placeholder="Address" {...register("address",{required:true})} />
                        <br/>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;