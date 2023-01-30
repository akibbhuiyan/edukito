import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section className="about-us">
      <Container>
        <div className="row">
          <div className="col-lg-5 md-mb50 valign">
            <div className="mb-50">
              <div className="section-header">
                <h6 className="section-title">About Us</h6>
                <h3 className="subTitle color-font">Our Comapny</h3>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <Link to="/" className="main-btn">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="./images/feat.jpg" alt="" />
            <div className="status">
              <div className="item">
                <h4>
                  3 <span>K</span>
                </h4>
                <h6>Happy Client</h6>
              </div>
              <div className="item">
                <h4>
                  14 <span>K</span>
                </h4>
                <h6>Success Project</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
