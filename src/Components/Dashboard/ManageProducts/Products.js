import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { CircularProgress } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [change,setChange]=useState(false);
    useEffect(() => {
        console.log('UseEffect Called!');
        setIsLoading(true);
        fetch('https://murmuring-reaches-90581.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setProducts(data);
            })
    }, [change])
    const handleDelete=(id)=>{
        fetch(`https://murmuring-reaches-90581.herokuapp.com/products/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('An item has been deleted!');
                const remainingProducts=products.filter(product=>product._id!==id);
                setProducts(remainingProducts);
            }
        })
    }

    
    return (
        <div>
            <h1>Existing Products</h1>
            {
                (isLoading === true) ?
                    <div className="text-center">
                        <CircularProgress />
                    </div>
                    :
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                products.map(product => <Product key={product._id} product={product} handleDelete={()=>handleDelete(product._id)} change={change} setChange={setChange}></Product>)
                            }
                        </Grid>
                    </Box>
            }
        </div>
    );
};

export default Products;