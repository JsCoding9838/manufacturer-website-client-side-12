import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary border-none uppercase font-bold text-white bold bg-gradient-to-r  from-sky-500 to-[#2BAAA9]">
      {children}
    </button>
    
  );
};

export default PrimaryButton;
