import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="quick-links">
        <h3>QUICK LINKS</h3>
        <ul>
          <li>CUSTOMER AREA</li>
          <li>Vendor AREA</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="products">
        <h3>Products</h3>
        <ul>
          <li>Classifieds</li>
          <li>Contact us</li>
          <li>Login</li>
          <li>Sign Up</li>
          <li>My Account</li>
          <li>Orders</li>
          <li>Tracking List</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <li>Return policy</li>
          <li>My Cart</li>
        </ul>
      </div>
      <div className="partner">
        <h3>Partner with us</h3>
        <ul>
          <li>Training</li>
          <li>Procedures</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="questions">
        <h3>Have any question?</h3>
        <ul>
          <li>CHAT</li>
          <li>+ 123 456 789</li>
        </ul>
      </div>
      <div className="app-store">
        <h3>Download on the</h3>
        <ul>
          <li>GET IT ON</li>
          <img src="./images/appStore.svg" alt="" />
          <img src="./images/googlePlay.svg" alt="" />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
