import React, { useEffect, useState } from 'react';
import {CardElement,useElements, useStripe} from "@stripe/react-stripe-js";
import UseAuth from './../../Hooks/UseAuth';
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({product}) => {
    const {price,_id}=product;
    const {user}=UseAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    const [processing,setProcessing]=useState(false);

    useEffect(() => {
        fetch('https://murmuring-reaches-90581.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }
      setProcessing(true);
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if(error){
          setError(error.message);
      }
      else{
          setError('');
      }

      //payment intent
      const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user.displayName,
              email: user.email
            },
          },
        },
      );

      if(intentError){
          setError(intentError.message);
          setSuccess('');
      }
      else{
          setError('');
          setSuccess('Payment is being handled successfully!');
          console.log(paymentIntent);
          setProcessing(false);

          //save to the database
          const payment = {
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            last4: paymentMethod.card.last4,
            transaction: paymentIntent.client_secret.slice('_secret')[0]
        }
          const url = `https://murmuring-reaches-90581.herokuapp.com/orders/${_id}`;
          fetch(url, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(payment)
          })
              .then(res => res.json())
              .then(data => console.log(data));
      }

    };
  
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {(processing===false)
             ?<button type="submit" disabled={!stripe || success}>
                Pay {price}
            </button>
            :
            <CircularProgress></CircularProgress>    
        }
            {(error.length!==0) && <h6 className="text-danger">{error}</h6>}
            {(success.length!==0) &&<h6 className="text-success">{success}</h6>}
        </form>
    );
};

export default CheckoutForm;