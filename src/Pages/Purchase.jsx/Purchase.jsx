import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Purchase = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)
    const [quantity, setQuantity] = useState(0);
    const {id} = useParams();
    const [products, setProducts] = useState({});
    useEffect( () => {
        const product = async () => {

            const {data} = await  axios.get(`http://localhost:5000/products/${id}`)
            setProducts(data);
        };
        product();
    }, [id]);

    const getQuantity = (event)=>{
        setQuantity(event.target.value);
    }
   
    const handleSubmit = async(event) => {
        event.preventDefault();
        const  orderPrice = parseInt(quantity) * parseInt(products.price_per_unit)
        console.log(orderPrice);
        const orderInfo ={email:user.email, product:products.name, quantity:quantity , totalprice:orderPrice, image:products.image}
        
        const { data } = await axios.post('http://localhost:5000/order',{orderInfo})
        if(loading){
            <Loading></Loading>
        }
        if(data.insertedId){
        toast.success('Order added successfully')
        navigate('/dashboard')
        }
    }

    return (
        <>
                    
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={products?.image} alt="Album"/></figure>
                <div class="card-body">

                    <form onSubmit={handleSubmit} className="flex flex-col px-10    ">
                    
                        <p className="text-4xl font-bold mt-2">{products?.name}</p>
                        <p className="text-justify font-semibold">{products?.description}</p>
                        <p className="text-xl font-semibold py-2">Available:{products?.available_quantity}</p>
                    
                        <label className="text-xl font-semibold py-2">Minimum order quantity: {products?.min_order_quantity}</label>
                        <input onChange={getQuantity} type="text" name='quan'  className="input input-bordered w-full text-lg" />

                        {(quantity <= products?.min_order_quantity) ? <small className="text-red-400 text-sm">Quantity must be more than: {products?.min_order_quantity}</small> : ''}

                        {(quantity > products?.available_quantity) ? <small className="text-red-400 text-sm">Order must be less than: {products?.min_order_quantity}</small> : ''}
                    
                        <input disabled={(quantity <= products?.min_order_quantity) || quantity > products?.available_quantity}
                        className={(quantity <= products?.min_order_quantity) || quantity > products?.available_quantity ? 'btn bg-gradient-to-r from-secondary/25 mb-4 to-primary/25 border-none text-white mt-8 ' : 'mt-8 btn bg-gradient-to-r from-secondary mb-4 to-primary border-none text-white '} type="submit" value="Confirm order" />
                    
                    </form>

                    {/* <h2 className="card-title text-3xl font-bold">{products?.name}</h2>
                    <p className="">{products?.description}</p>
                    <p className="font-semibold">Available-quantity: <span className="font-normal">{products?.available_quantity}</span></p>
                    
                    <p className="font-semibold">Price-per-unit: $<span className="font-normal">{products?.price_per_unit}</span></p>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                        <p className="font-semibold">Min-order-quantity: <span className="font-normal">{products?.min_order_quantity}</span></p>
                        </label>
                        <input type="number" placeholder="Type order quantity" class="input input-bordered input-md w-full max-w-xs mb-4" />
                    </div>        
                    <div class="card-actions justify-start">
                        <button class="btn btn-wide bg-gradient-to-r border-none from-sky-500 to-[#2BAAA9]">Place Order</button>
                    </div> */}
                </div>
            </div>
              
        </>
    );
};

export default Purchase;

// import { async } from "@firebase/util";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import toast from "react-hot-toast";

// import { useNavigate, useParams } from "react-router-dom";
// import auth from "../../Firebase/Firebase.init";
;

// const Purchase = () => {
//   const navigate = useNavigate()
//   const [user] = useAuthState(auth)

// const [quantity,setQuantity] = useState(0)
//   const { id } = useParams();
//   const [selected, SetSelected] = useState({});
//   useEffect(() => {
//     const selected = async () => {
//       const { data } = await axios.get(`http://localhost:5000/products/${id}`);
//       SetSelected(data);
    
//     };
//     selected();
//   }, [id]);

//  const getQuantity = (event)=>{
// setQuantity(event.target.value);

//  }
//  const handleSubmit = async(event) => {
//    event.preventDefault();
//  const  orderPrice = parseInt(quantity ) * parseInt(selected.price)
//   const orderInfo ={email:user.email, product:selected.name,quantity:quantity ,total:orderPrice ,img:selected.img}
  
//    const { data } = await axios.post('http://localhost:5000/order',{orderInfo})
  
//    if(data.insertedId){
//      toast.success('Order added successfully')
//      navigate('/dashboard')
//    }
     
  
//  }
 
//   return (
//   <div className="flex justify-center pt-5 px-2">
//         <div className="card  w-96 shadow-xl">
//             <figure className="px-2 pt-8">
//                 <img  src={selected.img} alt="Shoes" className="rounded-xl w-1/4" />
//             </figure>
//             <form onSubmit={handleSubmit} className="flex flex-col px-10    ">
                
//                 <p className="text-4xl font-bold mt-2">{selected.name}</p>
//                 <p className="text-justify font-semibold">{selected.description}</p>
//                 <p className="text-xl font-semibold py-2">Available:{selected.available}</p>
            
//                 <label className="text-xl font-semibold py-2">Minimum quantity</label>
//                 <input onChange={getQuantity} 
                
//                 type="text" name='quan'  className="input input-bordered w-full text-lg " />
//                 {quantity <= 9 ? <small className="text-red-400">minimum quantity 10</small> : ''}
//                 {quantity > selected.available ? <small className="text-red-400">not available</small> : ''}
//                 <label className="text-xl font-semibold py-4">Price: <span className="font-bold">${selected.price} pp</span></label>
            
//                 <input disabled={quantity <= 9 || quantity > selected.available}
//                 className={quantity <= 9 || quantity > selected.available ? 'btn bg-gradient-to-r from-secondary/25 mb-4 to-primary/25 border-none text-white ' : 'btn bg-gradient-to-r from-secondary mb-4 to-primary border-none text-white '} type="submit" value="Confirm order" />
                
//             </form>
//         </div>
//     </div>
    

//   )}
    
    // export default Purchase;