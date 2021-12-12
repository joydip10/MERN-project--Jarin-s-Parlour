import { TextField, TextareaAutosize, Input } from '@mui/material';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const AddProducts = () => {
    const [name,setName]=useState('');
    const [desc,setDesc]=useState('');
    const [price,setPrice]=useState('');
    const [image,setImage]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!image){
            return
        }
        const formData=new FormData();
        formData.append('name',name);
        formData.append('desc',desc);
        formData.append('price',price);
        formData.append('image',image);

        fetch('https://murmuring-reaches-90581.herokuapp.com/products',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('A product has been successfully inserted!');
                e.target.reset();
            }
        })
    }
    return (
        <div>
            <h1>Add Products</h1>
            <Form onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Product's Name" variant="standard" style={{ width: 200 }}
                onChange={e=>setName(e.target.value)} required/>
                <br />
                <br />
                <TextField id="standard-basic" label="Product's price" variant="standard" style={{ width: 200 }} onChange={e=>setPrice(e.target.value)} required/>
                <br/>
                <br/>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Product Description"
                    defaultValue=""
                    style={{ width: 200, height: 100 }}
                    onChange={e=>setDesc(e.target.value)}
                    required
                />
                <br />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    style={{ width: 240 }}
                    onChange={e=>setImage(e.target.files[0])}
                    required
                />
                <br/>
                <br/>
                <Button type="submit">Submit</Button>

            </Form>
        </div>
    );
};

export default AddProducts;