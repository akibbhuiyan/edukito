import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Blogs } from "../../../FakeDb";
import "./BlogSection.css";
const BlogSection = () => {
  const [blog, setblog] = useState([]);
  useEffect(() => {
    const blog = Blogs.slice(0, 2);
    setblog(blog);
  }, []);
  return (
    <section className="blog-section">
      <Container>
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="section-header text-center">
              <h6 className="section-title text-white">RECENT ARTICLES</h6>
              <h3 className="subTitle color-font">From our blogs.</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blog.map((blog, index) => (
            <div className="col-lg-6" key={index}>
              <div className="item mb-80 text-start">
                <div className="img">
                  <img src={blog.thumb} alt="" />
                </div>
                <div className="content">
                  <div className="info">
                    <a href="/" className="date">
                      {blog.date}
                    </a>
                    <span>/</span>
                    <a className="tag" href="/">
                      {blog.category}
                    </a>
                  </div>

                  <h5>
                    <Link to="/">{blog.title}</Link>
                  </h5>

                  <a href="/" className="blog-btn">
                    Read More..
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
