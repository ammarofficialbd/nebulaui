  import React from 'react';

const Button = ({ type, label }) => {

  const getColorClasses = () => {
    switch (type) {
    case 'primary':
        return { background: 'text-purple-700 hover:bg-purple-500 border-purple-500 border-2', text: 'hover:text-white' };
    case 'secondary':
        return { background: 'text-fuchsia-500 hover:bg-fuchsia-700 border-fuchsia-500 border-2', text: 'hover:text-white' };
     case 'accent':
      return { background: 'text-sky-500 hover:bg-sky-500 border-sky-500 border-2', text: 'hover:text-white' };    
    case 'success':
      return { background: 'text-green-500 hover:bg-green-700 border-green-500 border-2', text: 'hover:text-white' };
    case 'warning':
      return { background: 'text-yellow-500 hover:bg-yellow-500 border-yellow-500 border-2', text: 'hover:text-white' };
    case 'info':
      return { background: 'text-blue-500 hover:bg-blue-500 border-blue-500 border-2', text: 'hover:text-white' };
    case 'error':
      return { background: 'text-red-500 hover:bg-red-700 border-red-500 border-2', text: 'hover:text-white' };
      default:
        return { background: 'text-gray-500 hover:bg-gray-500 border-gray-500 border-2', text: 'hover:text-white' };
    }
  };

  const { background, text } = getColorClasses();

  return (
    <button
      className={`py-[.7rem] px-4 rounded ${background} ${text} font-semibold transition duration-300 ease-in-out hover:bg-opacity-80`}
    >
      {label}
    </button>
  );
};

export default Button;