import React from 'react';
import './gbutton.css'
const RadiusButton = ({ onClick, label }) => {
  return (
    <>
   
    <button
      className="bg-transparent border text-blue-500 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white  hover:animate-border-radius"
      onClick={onClick}
    >
      {label}
    </button>
    </>
   

  );
};

export default RadiusButton;
