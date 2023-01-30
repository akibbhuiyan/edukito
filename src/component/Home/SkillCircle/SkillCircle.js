import React from "react";
import { Container } from "react-bootstrap";
import "./SkillCircle.css";
const SkillCircle = () => {
  return (
    <section className="skill-circle pt-50 pb-50">
      <Container>
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6">
                <div className="item">
                  <div className="skill">
                    <div
                      className="project-count"
                      style={{
                        background: `conic-gradient(#12c2e9 ${90}% ,#0f1013  ${90}%)`,
                      }}
                    >
                      <div className="value">90%</div>
                    </div>
                  </div>
                  <div className="cont">
                    <span>Project</span>
                    <h6>Consulting</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item">
                  <div className="skill">
                    <div
                      className="project-count"
                      style={{
                        background: `conic-gradient(#12c2e9 ${75}% ,#0f1013  ${75}%)`,
                      }}
                    >
                      <div className="value">75%</div>
                    </div>
                  </div>
                  <div className="cont">
                    <span>Web</span>
                    <h6>Development</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillCircle;
