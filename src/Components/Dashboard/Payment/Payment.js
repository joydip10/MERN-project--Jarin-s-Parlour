import React from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jxv1lDfbc3HDpGtfcSKRnJuGmQz4HOyxEytLNnkj1mvv3CB6ygW0WpnNsT9Boq2JxXXRpMDoQmpqOv29mhJE0dI00X25DVUvF');
const Payment = () => {
    const { id } = useParams();
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        fetch(`https://murmuring-reaches-90581.herokuapp.com/orders/forpayment/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id])
    return (
        <div>
            <h2>Product id: {id}</h2>
            <h6>Product: {data.item}</h6>
            <h6>Price: {data.price}</h6>
            {data.price && <Elements stripe={stripePromise}>
                <CheckoutForm product={data} />
            </Elements>
            }
        </div>
    );
};

export default Payment;