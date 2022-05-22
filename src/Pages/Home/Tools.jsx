import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tools")
        .then((res) => res.json())
        .then((data) => {
            return setTools(data);
        });
    }, []);
    return (
        <>
            <div className="p-3 md:py-7 md:px-10">
                <h2 className="text-2xl md:text-4xl font-semibold text-center py-5">
                    Tools
                </h2>
                <div className="grid gap-5 md:grid-cols-3 justify-items-centen">
                    { tools.slice(0, 6).map(tool => <div key={tool?._id} className="card card-compact bg-base-100 shadow-xl">
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
                            <p className="font-semibold">Price-per-unit: $<span className="font-normal">{tool?.price_rer_unit}</span></p>
                            <div className="card-actions justify-end">
                            <Link to={`products/${tool._id}`} className="btn  btn-primary border-none bg-gradient-to-r  from-sky-500 to-indigo-500">
                                Purchase Now
                            </Link>
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className="text-2xl md:text-4xl font-semibold text-center py-5 card-actions justify-end">
                    <Link to="/manageTools" className="btn btn-wide font-semibold border-none bg-gradient-to-r  from-indigo-600 to-sky-800">See All Tools</Link>
                </div>
            </div>
        </>
    );
};

export default Tools;
