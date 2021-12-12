import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { CircularProgress } from '@mui/material';
import Navigation from './../Shared/Navigation/Navigation';
import Footer from './../Shared/Footer/Footer';

const OurProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://murmuring-reaches-90581.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setProducts(data);
            })
    }, [])
    return (
        <div>
            <Navigation/>
            <div className="container px-5">
            <h1>Our Products</h1>
            {
                (isLoading === true) ?
                    <div className="text-center">
                        <CircularProgress />
                    </div>
                    :
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                products.map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </Grid>
                    </Box>
            }
            </div>
            <Footer/>
        </div>
    );
};

export default OurProducts;