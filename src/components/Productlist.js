import React from 'react';
import ProductComponent from './ProductComponent';

const products = [
  {
    id: 1,
    imageSrc: "./images/product1.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/placeholder.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/placeholder-1.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/placeholder-2.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/placeholder-3.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/placeholder-4.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/placeholder-5.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
  {
    id: 1,
    imageSrc: "./images/placeholder-6.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5
  },
 
];

const ProductList = () => {
  return (
    <>
    <div className="productlistheader">
        <h4>Best Sellers</h4>
        <h5>View more</h5>
    </div>
    <div className='productlist'>
      {products.map(product => (
        <ProductComponent
          key={product.id}
          imageSrc={product.imageSrc}
          name={product.name}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
    </>
    
  );
};

export default ProductList;
