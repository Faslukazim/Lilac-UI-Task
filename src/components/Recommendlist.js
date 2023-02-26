import React from 'react';
import RecommendComponent from './RecommendComponent';

const recommends = [
  {
    id: 1,
    imageSrc: "./images/recommend1.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/recommend2.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/recommend3.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/recommend4.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/recommend5.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  
 
];

const Recommendlist = () => {
  return (
    <>
    <div className="recommendlistheader">
        <h4>Recommended</h4>
        <h5>View all</h5>
    </div>
    <div className='recommendlist'>
      {recommends.map(recommends => (
        <RecommendComponent
          key={recommends.id}
          imageSrc={recommends.imageSrc}
          name={recommends.name}
          price={recommends.price}
          rating={recommends.rating}
        />
      ))}
    </div>
    </>
    
  );
};

export default Recommendlist;
