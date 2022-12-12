import React from "react";
import Common from "./Common";
import about_img from "./images/about.jpg";
const About = () => {
  const title = "Know About Bhartiya Sports Academy";
  const btnName = "know About";
  const btnLink = "/secvice";
  return (
    <>
      <Common
        title={title}
        btnName={btnName}
        btnLink={btnLink}
        imgSrc={about_img}
      />
    </>
  );
};
export default About;
