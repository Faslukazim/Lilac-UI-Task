import React from 'react';

const RecommendComponent = ({imageSrc, name, price, rating}) => {
  return (
    <div className="recommendproduct">
      <div className="recommend-image">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
        <div className="product-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </div>
      </div>
    </div>
  );
};

export default RecommendComponent;
