import React from "react";
import { Container } from "react-bootstrap";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <section className="testimonials">
      <Container>
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <div className="content text-start ">
              <h6>Let’s Talk</h6>
              <h2>
                about your <br /> <b className="backColor">next project</b>.
              </h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 align-self-center">
            <a href="/" className="main-btn">
              Get in Touch
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
