import React from 'react';
import {NavLink} from 'react-router';

const LinkButton = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className="py-2 px-4 rounded bg-blue-500 text-white font-semibold transition duration-300 ease-in-out hover:bg-opacity-80 inline-block"
    >
      {label}
    </NavLink>
  );
};

export default LinkButton;
