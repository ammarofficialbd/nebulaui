import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function CountryInfoModal({ isOpen, onRequestClose }) {
  const [countryData, setCountryData] = useState(null);
  const customStyles = {
    content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/countries');
      const data = await response.json();
      return data; // Assuming the API response contains an array of country information
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  useEffect(() => {
    async function fetchDataAndSetState() {
      const data = await fetchData();
      setCountryData(data);
    }

    if (isOpen) {
      fetchDataAndSetState();
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Country Information Modal"
    >
      <h2>Country Information</h2>
      {countryData ? (
        <ul>
          {countryData.map((country) => (
            <li key={country.id}>{country.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading country information...</p>
      )}
       {/* Close button */}
       <button onClick={onRequestClose} className='text-red-500'>Close</button>
    </Modal>
  );
}

export default CountryInfoModal;
