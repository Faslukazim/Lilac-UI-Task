import React from "react";

function FlashComponent() {
  return (
    <div className="flashsale">
      <div className="flashleft">
        <h1>Flash Sale</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore
        </p>
        <h1>05  :  42  :  19  :  54</h1>
      </div>
      <div className="flashright">
      <div className="product">
      <div className="product-image">
        <img src="./images/flashpic1.svg" alt="" />
      </div>
      <div className="product-info">
        <div className="product-name">Casio G-Shock Ana-Digi Quartz World Time 200m Black</div>
        <div className="product-price">$33.3</div>
        
      </div>
    </div>
    <div className="product">
      <div className="product-image">
        <img src="./images/flashpic2.svg" alt="" />
      </div>
      <div className="product-info">
        <div className="product-name">Canon LBP113w imageCLASS WiFi Laser Printer</div>
        <div className="product-price">$33.3</div>
        
      </div>
    </div>
      </div>
    </div>
  );
}

export default FlashComponent;
