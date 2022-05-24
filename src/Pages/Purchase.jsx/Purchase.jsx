import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
const axios = require('axios').default;
const Purchase = () => {
    const {id} = useParams();
    const [products, setProducts] = useState({});

    useEffect( () => {
        const product = async () => {

            const {data} = await  axios.get(`http://localhost:5000/products/${id}`)
            setProducts(data);
        };
        product();
    }, []);

    return (
        <>
                    
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={products?.image} alt="Album"/></figure>
                <div class="card-body">
                    <h2 className="card-title">{products?.name}</h2>
                    <p className="">{products?.description}</p>
                    <p className="font-semibold">Min-order-quantity: <span className="font-normal">{products?.min_order_quantity}</span></p>
                    <p className="font-semibold">Available-quantity: <span className="font-normal">{products?.available_quantity}</span></p>
                    <p className="font-semibold">Price-per-unit: $<span className="font-normal">{products?.price_per_unit}</span></p>          
                    <div class="card-actions justify-start">
                    <button class="btn btn-wide bg-gradient-to-r border-none from-sky-500 to-[#2BAAA9]">Wide</button>
                    </div>
                </div>
            </div>
              
        </>
    );
};

export default Purchase;