import React, { useState } from 'react';
import { Modal, TextField, TextareaAutosize, Input } from '@mui/material';
import { Box } from '@mui/material';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const UpdateProduct = ({ open, handleClose, st, product, change, setChange }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [desc, setDesc] = useState(product.desc);
    const { _id } = product;

    const handleSubmit = (e) => {
        e.preventDefault();
        let data;

        data = { name: name, price: price, desc: desc };
        data = JSON.stringify(data);
        fetch(`https://murmuring-reaches-90581.herokuapp.com/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    alert('A product has been updated');
                    if (change === false) {
                        setChange(true);
                    }
                    else {
                        setChange(false);
                    }
                    handleClose();
                }
            })

    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={st}>
                <div className="d-flex flex-column align-items-center">
                    <img src={`data:image/png;base64,${product.image}`} alt="Something" height='250px' />
                    <Form onSubmit={handleSubmit}>
                        <TextField id="outlined-basic" label="Name" defaultValue={name} variant="outlined" onChange={e => setName(e.target.value)} required />
                        <br />
                        <br />
                        <TextField id="outlined-basic" label="Price" defaultValue={price} variant="outlined" onChange={e => setPrice(e.target.value)} required />
                        <br />
                        <br />
                        <TextareaAutosize maxRows={4}
                            aria-label="maximum height"
                            placeholder="Product Description"
                            defaultValue={desc}
                            onChange={e => setDesc(e.target.value)}
                            required />
                        <br />
                        <br />
                        <div className="mb-3 text-center">
                            <Button type="submit" variant="warning">Update</Button>
                        </div>
                    </Form>
                </div>
            </Box>
        </Modal>
    );
};

export default UpdateProduct;