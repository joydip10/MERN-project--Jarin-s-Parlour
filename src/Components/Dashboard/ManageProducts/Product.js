import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import UpdateProduct from './UpdateProduct';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Product = (props) => {
    const { _id, name, image, desc, price } = props.product;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Price {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <div className="text-center mb-2">
                    <Button variant="warning" onClick={handleOpen}>Update</Button>
                    <Button variant="danger" onClick={props.handleDelete}>Delete</Button>
                </div>
            </Card>
            <UpdateProduct product={props.product} open={open} handleClose={handleClose} change={props.change} setChange={props.setChange} st={style}></UpdateProduct>
        </Grid>
    );
};

export default Product;