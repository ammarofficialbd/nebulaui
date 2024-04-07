// VerticalCard.js
import React from 'react';


const VerticalCard = ({ mainImage, authorImage, secondaryImage, authorName, designation, date, title, description, styles }) => {


  return (
    <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg" style={{gap:'1rem', padding:'1rem', maxWidth:'27rem'}}>
     <header className='card__main-image' style={styles}> {secondaryImage && (
        <img
        src={mainImage}
        alt="Main"
        className="w-full object-cover rounded-lg mr-4"
      />
      )} 
      </header> 
    
      <footer className='card__description flex flex-col'style={{padding:'1rem'}}>
        <span className='mb-2' style={{marginBottom: '1rem'}}>tag</span>
        <p className="text-gray-400 text-sm mb-4">{date}</p>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-gray-700">{description}</p>
        <div className='card__author mt-2' style={{marginTop: '1rem'}}> 
        <img
          src={authorImage}
          alt="Author"
          className="card__author_image w-24 h-24 object-cover rounded-full mb-2"
        />
        <h3 className="text-xl font-bold">{authorName}</h3>
        <p className="text-gray-500">{designation}</p>
        </div>
      </footer>
    </div>
  );
};

export default VerticalCard;
