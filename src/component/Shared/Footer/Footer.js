import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import { HiOutlineLocationMarker, HiOutlineMailOpen } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { SlPaperPlane } from "react-icons/sl";
import {
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaPinterestP,
} from "react-icons/fa";
import { Blogs } from "../../../FakeDb";
import { Link } from "react-router-dom";
const Footer = () => {
  const [blog, setblog] = useState([]);
  useEffect(() => {
    const blog = Blogs.slice(0, 2);
    setblog(blog);
  }, []);
  return (
    <section className="footer text-start ">
      <Container>
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon">
                    <HiOutlineLocationMarker />
                  </span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <span className="icon">
                    <HiOutlineMailOpen />
                  </span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon">
                    <IoMdCall />
                  </span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+1234567899</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                {blog.map((blog, idx) => (
                  <li key={idx}>
                    <div className="img">
                      <img src={blog.thumb} alt="" />
                    </div>
                    <div className="sm-post">
                      <Link to="/">
                        <p>{blog.title}</p>
                      </Link>
                      <Link to="/">
                        <span className="date">{blog.date}</span>
                      </Link>
                    </div>
                  </li>
                ))}
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span>
                      <SlPaperPlane />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <Link to="/">Edukito</Link>
              </div>
              <div className="scoial">
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
              <div className="copyright">
                <p>© 2022, Akib Bhuiya || All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
