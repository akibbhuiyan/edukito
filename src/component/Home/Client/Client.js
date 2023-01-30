import React from "react";
import { Container } from "react-bootstrap";
import { clientSite } from "../../../FakeDb";
import "./Client.css";
const Client = () => {
  return (
    <section className="client">
      <Container>
        <div className="row">
          <div className="col-lg-4 d-flex align-items-center">
            <div className="section-header text-start">
              <h6 className="section-title">Best Features</h6>
              <h3 className="subTitle color-font">Our Clients</h3>
              <p>
                Our area of practice is quite wide: design, graphics, branding,
                development.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="bord">
              {clientSite.map((client, idx) => (
                <div className="brand" key={idx}>
                  <div className="items">
                    <img src={client.img} alt="" />
                    <div className="wordSpliting">
                      <a href="/" className="link-word">
                        {client.link.split("").map((w, idx) => (
                          <span
                            class="char"
                            data-char={w}
                            style={{ "--char-index": idx }}
                          >
                            {w}
                          </span>
                        ))}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Client;
