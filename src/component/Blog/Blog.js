import React from "react";
import { Container } from "react-bootstrap";
import { Blogs } from "../../../FakeDb";

const Blog = () => {
  return (
    <section className="blog-section">
      <Container>
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="section-header text-center">
              <h1 className=" color-font">Our News.</h1>
              <p className=" ">
                All the most current news and events of our creative team.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              {Blogs.map((blog, index) => (
                <div className="item mb-80" key={index}>
                  <div className="img">
                    <img src={blog.thumb} alt="" />
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <a href="/" className="date">
                          {blog.date}
                        </a>
                        <div className="tags">
                          <a href="/">Web Development</a>
                          <a href="/">{blog.category}</a>
                          <a href="/">eduKito</a>
                        </div>
                        <h4 className="title">{blog.title}</h4>
                        <p>{blog.des}</p>
                        <a href="/" className="main-btn">
                          Read More..
                        </a>
                      </div>
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

export default Blog;
