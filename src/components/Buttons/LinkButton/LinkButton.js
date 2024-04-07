import React from 'react';
import {Link} from 'react-router-dom';

const LinkButton = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="py-2 px-4 rounded bg-blue-500 text-white font-semibold transition duration-300 ease-in-out hover:bg-opacity-80 inline-block"
    >
      {label}
    </Link>
  );
};

export default LinkButton;
