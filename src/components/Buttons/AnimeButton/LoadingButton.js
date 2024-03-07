import React from 'react';

const LoadingButton = ({ isLoading, onClick, label}) => {
  
  const handleClick = () => {
    if (!isLoading) {
     // onClick(); // Trigger the action only if not in loading state
    }
  };


  return (
    <button
      className={`py-2 px-4 rounded bg-blue-500 text-white font-semibold transition duration-300 ease-in-out hover:bg-opacity-80 ${
        isLoading ? 'opacity-60 cursor-not-allowed' : ''
      }`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 6.627 5.373 12 12 12v-4a7.946 7.946 0 01-6-2.709z"
            ></path>
          </svg>
          {label}
        </div>
      ) : (
        'Click Me'
      )}
    </button>
  );
};

export default LoadingButton;
