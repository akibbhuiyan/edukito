import React from "react";
import { Container } from "react-bootstrap";
import { BiPlay } from "react-icons/bi";
import Slider from "react-slick";
import SkillCircle from "../SkillCircle/SkillCircle";
import "./VideoandClient.css";
const VideoandClient = () => {
  const ClientComment = [
    {
      name: "Alex Regelman",
      designation: "Co-founder, Colabrio",
      comment:
        "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora.",
      thumb: "/images/1.jpg",
    },
    {
      name: "Alex Regelman",
      designation: "Co-founder, Colabrio",
      comment:
        "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora.",
      thumb: "/images/2.jpg",
    },
    {
      name: "Alex Regelman",
      designation: "Co-founder, Colabrio",
      comment:
        "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent taciti sociosqu ad litora.",
      thumb: "/images/3.jpg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sectopn">
      <div className="background bg-image">
        <Container>
          <div className="row">
            <div className="col-lg-6">
              <div className="video-area">
                <span className="text">Watch Video</span>
                <a href="/">
                  <div className="video-icon">
                    <BiPlay />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testmonial-box">
                <div className="head-box">
                  <h6>Our Clients</h6>
                  <h4>What Client's Say?</h4>
                </div>
                <div className="slider">
                  <Slider {...settings}>
                    {ClientComment.map((comment, index) => (
                      <div key={index} className="item">
                        <p>{comment.comment}</p>
                        <div className="info">
                          <div className="img">
                            <img src={comment.thumb} alt="" />
                          </div>
                          <div className="cont">
                            <div className="author">
                              <div className="author-name">{comment.name} </div>
                              <div className="author-details">
                                {comment.designation}{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <SkillCircle />
    </section>
  );
};

export default VideoandClient;
