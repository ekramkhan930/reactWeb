import React from "react";
import Common from "./Common";
import welcome_img from "./images/welcome_image.jpg";
const Home = () => {
  return (
    <>
      <Common
        title="Welcome to the Bhartiya Sports"
        btnName="Explore More"
        btnLink="/contact"
        imgSrc={welcome_img}
      />
    </>
  );
};
export default Home;
