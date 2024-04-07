import React from 'react';
import './btn.css'
const StateButton = ({ type, label,handleCook, item}) => {

  const getColorClasses = () => {
    switch (type) {
    case 'primary':
        return { background: 'bg-purple-500', text: 'text-white' };
    case 'secondary':
        return { background: 'bg-fuchsia-500 hover:bg-fuchsia-700', text: 'text-white' };
     case 'accent':
        return { background: 'bg-sky-500', text: 'text-gray-700' };     
    case 'success':
        return { background: 'bg-green-500', text: 'text-white' };
    case 'warning':
        return { background: 'bg-yellow-500', text: 'text-black' };
    case 'info':
        return { background: 'bg-blue-500 hover:bg-blue-700', text: 'text-white' };
    case 'error':
        return { background: 'bg-red-500 hover:bg-red-700', text: 'text-white' };
      default:
        return { background: 'bg-amber-200 hover:bg-gray-400', text: 'text-black' };
    }
  };

  const { background, text } = getColorClasses();

  return (
    <button
      className={`py-6 px-4 rounded ${background} ${text} font-semibold btn`} onClick={()=>handleCook(item)}
    >
      {label}
    </button>
  );
};

export default StateButton;
