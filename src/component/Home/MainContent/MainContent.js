import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import BlogSection from "../BlogSection/BlogSection";
import Client from "../Client/Client";
import OurWork from "../OurWork/OurWork";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import VideoandClient from "../VideoandClient/VideoandClient";
import WorkCarosel from "../WorkCarosel/WorkCarosel";

const MainContent = () => {
  return (
    <div className="main-content">
      <AboutUs />
      <Services />
      <WorkCarosel />
      <OurWork />
      <VideoandClient />
      <Client />
      <BlogSection />
      <Testimonial />
    </div>
  );
};

export default MainContent;
