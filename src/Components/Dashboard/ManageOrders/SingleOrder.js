import React from 'react';
import { Button } from 'react-bootstrap';

const SingleOrder = ({ order,change,setChange }) => {
    const { _id, name, item, price, status } = order;
    const handleChange=()=>{
        let data;
        if(status==="pending"){
            data={status:"approved"};
        }
        else{
            data={status:"pending"};
        }
        fetch(`https://murmuring-reaches-90581.herokuapp.com/orders/updateStatus/${_id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('A status has been changed!')
                if(change===true) setChange(false);
                else setChange(true);
            }
        })
    }
    const handleDelete=()=>{
        fetch(`https://murmuring-reaches-90581.herokuapp.com/orders/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('An Order has been deleted');
                if(change===true) setChange(false);
                else setChange(true);
            }
        })
    }
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{item}</td>
            <td>{price}</td>
            <td>{(order?.pay)?"paid":"unpaid"}</td>
            <td>{status}</td>
            <td><Button variant={(status==="pending")?"primary":"success"} onClick={handleChange}>Change Status</Button></td>
            <td><Button variant="danger" onClick={handleDelete}>Delete</Button></td>
        </tr>
    );
};

export default SingleOrder;