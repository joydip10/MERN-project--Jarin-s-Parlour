import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import SingleOrder from './SingleOrder';

const ManageOrders = () => {
    const [change, setChange] = useState(false);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://murmuring-reaches-90581.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLoading(false);
            })
    }, [change])
    return (
        <div>
            <h1>Manage Orders</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Payment Status</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>DELETE</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        (isLoading === false) &&
                        orders.map(order => <SingleOrder key={order._id} order={order} change={change} setChange={setChange} />)
                    }
                    {
                        (isLoading === true) &&
                        <div className="text-center mt-2">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>

                    }
                </tbody>

            </Table>
        </div>
    );
};

export default ManageOrders;