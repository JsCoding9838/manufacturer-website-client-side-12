import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Purchase = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    const product = async () => {
      const { data } = await axios.get(
        `https://fathomless-beach-67972.herokuapp.com/products/${id}`
      );
      setProducts(data);
    };
    product();
  }, [id]);

  const getQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const orderPrice = parseInt(quantity) * parseInt(products.price_per_unit);
    // console.log(orderPrice);
    const orderInfo = {
      email: user.email,
      product: products.name,
      quantity: quantity,
      totalprice: orderPrice,
      image: products.image,
    };

    const { data } = await axios.post("https://fathomless-beach-67972.herokuapp.com/order", {
      orderInfo,
    });
    if (loading) {
      <Loading></Loading>;
    }
    if (data.insertedId) {
      toast.success("Order added successfully");
      navigate("/dashboard");
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={products?.image} alt="Album" />
      </figure>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="flex flex-col px-10    ">
          <p className="text-4xl font-bold mt-2">{products?.name}</p>
          <p className="text-justify font-semibold">{products?.description}</p>
          <p className="text-xl font-semibold py-2">
            Available:{products?.available_quantity}
          </p>

          <label className="text-xl font-semibold py-2">
            Minimum order quantity: {products?.min_order_quantity}
          </label>
          <input
            onChange={getQuantity}
            type="text"
            name="quan"
            className="input input-bordered w-full text-lg"
          />

          {quantity < products?.min_order_quantity ? (
            <small className="text-red-400 text-sm font-semibold">
              Quantity must be more than: {products?.min_order_quantity}
            </small>
          ) : (
            ""
          )}

          {quantity > products?.available_quantity ? (
            <small className="text-red-400 text-sm font-semibold">
              Order must be less than: {products?.available_quantity}
            </small>
          ) : (
            ""
          )}

          <input
            disabled={
              quantity <= products?.min_order_quantity ||
              quantity > products?.available_quantity
            }
            className={
              quantity <= products?.min_order_quantity ||
              quantity > products?.available_quantity
                ? "btn bg-gradient-to-r  from-sky-200 to-[#3a5353] mb-4 border-none text-white mt-8 "
                : "mt-8 btn bg-gradient-to-r  from-sky-500 to-[#2BAAA9] mb-4  border-none text-white "
            }
            type="submit"
            value="Confirm order"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;