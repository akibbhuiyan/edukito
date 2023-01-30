import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { works } from "../../../FakeDb";
import "./WorkCarosel.css";
import { Link } from "react-router-dom";
const WorkCarosel = () => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <section className="work-carusel">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 mo-padding">
            <Slider {...settings}>
              {works.map((work) => (
                <div
                  key={work.id}
                  className="slide"
                  style={{ width: 674, height: 480 }}
                >
                  <div className="content">
                    <div className="item-image bg-image">
                      <img src={work.thumbnail} alt="" />
                    </div>
                    <div className="cont">
                      <h6 className="color-font">{work.category}</h6>
                      <h4>
                        <Link to="/">{work.name}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarosel;
