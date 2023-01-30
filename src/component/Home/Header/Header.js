import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaPinterestP,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="fixed-slider">
      <Carousel>
        <Carousel.Item>
          <div className="carusel-img">
            <img
              className="carusel-img d-block w-100"
              src="./images/01.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption className="caption">
            <h1 className="color-font">
              Business value through digital products
            </h1>

            <Link to="/" className="main-btn">
              Look More
            </Link>
          </Carousel.Caption>
          <div className="scoial-icon">
            <a href="www.facebook.con">
              <FaFacebookF />
            </a>
            <a href="www.facebook.con">
              <FaTwitter />
            </a>
            <a href="www.facebook.con">
              <FaBehance />
            </a>
            <a href="www.facebook.con">
              <FaPinterestP />
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carusel-img">
            <img
              className="carusel-img d-block w-100"
              src="./images/02.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption className="caption">
            <h1 className="color-font">Original Solutions</h1>
            <p>
              If you need to redesign your new project, new visual strategy, ux
              structure or you do have some cool ideas for collaboration.
            </p>
            <Link to="/" className="main-btn">
              Look More
            </Link>
          </Carousel.Caption>
          <div className="scoial-icon">
            <a href="www.facebook.con">
              <FaFacebookF />
            </a>
            <a href="www.facebook.con">
              <FaTwitter />
            </a>
            <a href="www.facebook.con">
              <FaBehance />
            </a>
            <a href="www.facebook.con">
              <FaPinterestP />
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carusel-img">
            <img
              className="carusel-img d-block w-100"
              src="./images/03.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption className="caption">
            <h1 className="color-font">Digital Design Awards</h1>

            <Link to="/" className="main-btn">
              Look More
            </Link>
          </Carousel.Caption>
          <div className="scoial-icon">
            <a href="www.facebook.con">
              <FaFacebookF />
            </a>
            <a href="www.facebook.con">
              <FaTwitter />
            </a>
            <a href="www.facebook.con">
              <FaBehance />
            </a>
            <a href="www.facebook.con">
              <FaPinterestP />
            </a>
          </div>
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Header;
