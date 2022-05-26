import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const Payment = () => {
    const [payProduct,setPayProduct] = useState({})
    const {id} = useParams()
    // console.log(id);
    useEffect(() => {
      const paymentProduct = async () => {
        const { data } = await axios.get(
          `https://fathomless-beach-67972.herokuapp.com/order/${id}`,
          {}
        );
        setPayProduct(data);
      };
      paymentProduct();
    }, [id]);

    const stripePromise = loadStripe('pk_test_51L3K1BGmCBN0z0XUQf1pEsLIYS7SngAB11I2TXYxv2d6L2ZqZr3pvDUfCcQ7p2x9hziZ18TYufjL7I1J5ifySH0e00M68hweoY');

  return (
    <div className="flex justify-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl p-8">
        <Elements stripe={stripePromise}>
        <CheckoutForm payProduct={payProduct} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;