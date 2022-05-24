import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import PrimaryButton from '../Shared/PrimaryButton';

const MyOrder = ({order, refetch}) => {
    const deleteHandler = async(id) =>{
        const confirm = window.confirm('Are you sure you want to delete')
        if(confirm){
            const {data} = await axios.delete(`http://localhost:5000/order/${id}`)
          if(data){
              toast.success('Order deleted successfully')
    
              refetch()
          }
        }
    }
    const paymentHandler =()=>{

    } 
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img className='w-2/3' src={order.image} alt="Shoes " /></figure>
            <div class="card-body">
                <h2 class="card-title text-2xl text-center md:text-3xl font-semibold text-[#2BAAA9]">{order.product}</h2>
                <p className='text-lg font-semibold'> Total quantity: {order.quantity}</p>
                <p className='text-lg font-semibold'>Total Price: ${order.totalprice}</p>
                <div class="card-actions flex justify-between">
                    <div onClick={()=>paymentHandler(order._id)}><PrimaryButton>Pay Now</PrimaryButton></div>
                    <button onClick={()=>deleteHandler(order._id)} class="btn btn-outline">delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;