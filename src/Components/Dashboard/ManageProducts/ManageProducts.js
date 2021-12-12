import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Box } from '@mui/material';
import {useNavigate,Outlet} from "react-router-dom";

const ManageProducts = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={()=>navigate('/dashboard/manageProducts/addProducts')}>Add Products</Button>
                <Button onClick={()=>navigate('/dashboard/manageProducts/products')}> Manage Existing Products </Button>
            </ButtonGroup>
            <Outlet></Outlet>
        </Box>
    );
};

export default ManageProducts;