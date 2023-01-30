import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaRegSmile, FaMedal } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";
import "./OurWork.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const OurWork = () => {
  const ourWork = [
    {
      des: "People who are commited to their management tasks.",
      count: 2400,
      icons: <FaRegSmile />,
    },
    {
      des: "Signed projects that have been confirmed complete!",
      count: 133,
      icons: <TiShoppingBag />,
    },
    {
      des: "International awards and cups for design projects",
      count: 46,
      icons: <FaMedal />,
    },
  ];
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="number-sec">
      <Container>
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="section-header text-center">
              <h6 className="section-title text-white">FUN FACTS</h6>
              <h3 className="subTitle color-font">
                Pleasure in the job puts perfection in the work.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {ourWork.map((work, idx) => (
            <div className="col-md-4" key={idx}>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="item">
                  <span className="icon">{work.icons}</span>
                  <h3>
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={work.count}
                        duration={2}
                        delay={0}
                      />
                    )}
                  </h3>
                  <p className="word-char">{work.des}</p>
                </div>
              </ScrollTrigger>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurWork;
