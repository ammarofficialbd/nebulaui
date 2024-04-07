// Card.js or any other component
import React from 'react';
import VerticalCard from '../components/Crads/VeritcalCard';
import mainimage from '../img/01.jpg'
import HorizontalCard from '../components/Crads/HorizontalCard';
const Card = () => {
  const styleImage = {
    width: "25rem",
}
  return (
    <>
    <HorizontalCard styles={styleImage}
        mainImage={mainimage} // Replace with your main image source
        authorImage="https://placekitten.com/24/24" // Replace with your author image source
        secondaryImage="https://placekitten.com/24/24" // Replace with your secondary image source
        authorName="John Doe"
        designation="Software Engineer"
        date="March 9, 2024"
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus."/>

    <div className="flex justify-center items-center bg-gray-100 rounded-md ">
      <VerticalCard
        styles={styleImage}
        mainImage={mainimage} // Replace with your main image source
        authorImage="https://placekitten.com/24/24" // Replace with your author image source
        secondaryImage="https://placekitten.com/24/24" // Replace with your secondary image source
        authorName="John Doe"
        designation="Software Engineer"
        date="March 9, 2024"
        title="Lorem Ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus."
      />
    </div>
    </>
    

  );
};

export default Card;
