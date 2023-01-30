import React from "react";
import { Container } from "react-bootstrap";
import { BsPaintBucket, BsDisplay } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import "./Services.css";
const Services = () => {
  const AllServices = [
    {
      name: "Graphic Design",
      des: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium",
      icons: <BsPaintBucket />,
    },
    {
      name: "Web & Mobile Design",
      des: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium",
      icons: <IoIosPhonePortrait />,
    },
    {
      name: "Social Media Marketing",
      des: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium",
      icons: <BsDisplay />,
    },
  ];

  return (
    <section className="services pt-0">
      <Container>
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="section-header text-center">
              <h6 className="section-title text-white">Best Features</h6>
              <h3 className="subTitle color-font">
                We are a new digital product development agency
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {AllServices.map((service, idx) => (
            <div className="col-lg-4" key={idx}>
              <div className="item-box mb-md-5 text-white">
                <div className="icon">{service.icons}</div>
                <h6>{service.name}</h6>
                <p>{service.des}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
