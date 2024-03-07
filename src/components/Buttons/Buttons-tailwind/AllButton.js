import React from 'react';

const AllButton = ({ size, onClick, label }) => {
  const getSizeClass = (size) => {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-2 rounded-sm';
      case 'md':
        return 'text-md px-6 py-3 rounded-md';
      case 'lg':
        return 'text-lg px-8 py-4 rounded-lg';
      case 'xl':
        return 'text-xl px-10 py-5 rounded-xl';
      case '2xl':
        return 'text-2xl px-12 py-6 rounded-2xl';
      default:
        return 'text-base px-5 py-3 rounded'; // Default size
    }
  };

  const sizeClass = getSizeClass(size);

  return (
    <button  className={`bg-blue-500 text-white rounded- ${sizeClass} transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md`}
    onClick={onClick}>
      {label}
    </button>
  );
};

export default AllButton;
