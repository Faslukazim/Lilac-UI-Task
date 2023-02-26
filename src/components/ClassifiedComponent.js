import React from 'react';

const ClassifiedComponent = ({imageSrc, name, price, rating}) => {
  return (
    <div className="classifiedproduct">
      <div className="classified-image">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="classified-price">{price}</div>
        
      </div>
    </div>
  );
};

export default ClassifiedComponent;
