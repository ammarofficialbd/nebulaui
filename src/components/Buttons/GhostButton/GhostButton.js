import React from 'react';
import './GhostButton.css'; // You can create a separate CSS file for styling

const GhostButton = ({ onClick, label }) => {
  return (
    <button className="ghost-button" onClick={onClick}>
      {label}
    </button>
  );
};



export default GhostButton;
