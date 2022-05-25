import React from 'react';
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="bg-cover flex flex-col md:flex-row justify-center items-center bg-center bg-gray-200 h-auto py-8 md:py-24 px-4 md:px-10 object-fill gap-3">
      <div className="md:w-1/2 space-y-2 order-2 md:order-1">
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-[25px] md:text-3xl  font-bold">
          Multimedia Products
        </p>
        <p className="">
        A manufacturer is a person or company that produces finished goods from raw materials by using various tools, equipment, and processes, and then sells the goods to consumers, wholesalers, distributors, retailers, or to other manufacturers for the production of more complex goods.
        </p>
        <PrimaryButton>get started</PrimaryButton>
      </div>
      <div className="md:w-1/2 order-1 md:order-2">
        <img
          src={`https://t4.ftcdn.net/jpg/02/87/63/27/240_F_287632715_D9LViqZRocZdkF6FxbIbHONetbMWp2Ft.jpg`}
          className="w-full rounded"
          alt="banner-img"
        />
      </div>
    </div>
  );
};

export default Banner;