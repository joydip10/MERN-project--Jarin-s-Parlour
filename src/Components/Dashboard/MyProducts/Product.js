import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { _id, item, image, desc, price } = props.product;
    console.log('ID--->',_id);
    const navigate=useNavigate();
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`data:image/png;base64,${image}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Price {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <div className="text-center mb-2">
                    <Button variant="danger" onClick={props.handleDelete}>Delete</Button>
                    {
                        (props.product?.pay)?
                        <Button variant="secondary" disabled>Paid</Button>
                        :
                        <Button variant="success" onClick={()=>navigate(`/dashboard/payment/${_id}`)}>Pay</Button>
                    }
                </div>
            </Card>
        </Grid>
    );
};

export default Product;