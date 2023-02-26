import React from "react";
import ClassifiedComponent from "./ClassifiedComponent";

const classproducts = [
  {
    id: 1,
    imageSrc: "./images/class1.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5,
  },
  {
    id: 1,
    imageSrc: "./images/class2.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5,
  },
  {
    id: 1,
    imageSrc: "./images/class3.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5,
  },
  {
    id: 1,
    imageSrc: "./images/class4.svg",
    name: "Product 1",
    price: "$9.99",
    rating: 4.5,
  },
];

const Classifiedlist = () => {
  return (
    <>
    
      <div className="classifiedlist">
      <div className="classifiedproduct1">
          <h4>
            Classified
            <br /> Products on the week
          </h4>
          <div className="arrows2">
            <div className="arrow arrow-left">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="arrow arrow-right">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>

          <button className="explore">Explore</button>
        </div>
         {classproducts.map((classproducts) => (
          <ClassifiedComponent
            key={classproducts.id}
            imageSrc={classproducts.imageSrc}
            name={classproducts.name}
            price={classproducts.price}
            rating={classproducts.rating}
          />
        ))}
      </div>
    </>
  );
};

export default Classifiedlist;
