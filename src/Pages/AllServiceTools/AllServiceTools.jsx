import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllServiceTools = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("https://fathomless-beach-67972.herokuapp.com/tools")
          .then((res) => res.json())
          .then((data) => {
            return setTools(data);
          });
    }, []);

    const alertHandle = () => {
        toast.error("You can't buy from here");
    }
    return (
        <>
            <div className="p-3 md:py-7 md:px-10">
                <h2 className="text-center py-5 uppercase mb-3 font-bold text-[22px] md:text-5xl text-[#2BAAA9]">
                    ALL Service Tools
                </h2>
                <div className="grid gap-5 md:grid-cols-3 justify-items-centen">
                    { tools.map(tool => <div key={tool?._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img
                            src={tool?.image}
                            alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{tool?.name}</h2>
                            <p className="">
                            {tool?.description}
                            </p>
                            <p className="font-semibold">Min-order-quantity: <span className="font-normal">{tool?.min_order_quantity}</span></p>
                            <p className="font-semibold">Available-quantity: <span className="font-normal">{tool?.available_quantity}</span></p>
                            <p className="font-semibold">Price-per-unit: $<span className="font-normal">{tool?.price_per_unit}</span></p>
                            <div className="card-actions justify-end">
                            <button onClick={alertHandle} className="btn  btn-primary border-none bg-gradient-to-r  from-sky-500 to-[#2BAAA9]">
                                Purchase Now
                            </button>
                            </div>
                        </div>
                    </div>)}
                </div>
                {/* <div className="text-2xl md:text-4xl font-semibold text-center py-5 card-actions justify-end">
                    <Link to="allServiceTools" className="btn btn-wide hover:btn-outline font-semibold border-none bg-gradient-to-r  from-[#2BAAA9] to-sky-800">See All Tools</Link>
                </div> */}
            </div>
        </>
    );
};

export default AllServiceTools;