import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <div className="bannerslide">

    <Carousel autoPlay={true}>
      <div >
        <img className="bannerimg" src="../images/banner1.svg" />
        <p className="bannertext">
          From students to senior citizens this web portal of <span className="bannerspan">"Products and
          Classifieds”</span> provides it all
        </p>
      </div>
      <div>
        <img className="bannerimg" src="../images/banner2.jpg" />
        <p className="bannertext">
          From students to senior citizens this web portal of <span className="bannerspan">"Products and
          Classifieds”</span> provides it all
        </p>
      </div>
      <div>
        <img className="bannerimg" src="../images/banner3.jpg" />
        <p className="bannertext">
          From students to senior citizens this web portal of <span className="bannerspan">"Products and
          Classifieds”<br/></span> provides it all
        </p>
      </div>
    </Carousel>
    </div>

  );
};

export default DemoCarousel;
