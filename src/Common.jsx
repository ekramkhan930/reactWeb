import React from "react";
import { NavLink } from "react-router-dom";
const Common = ({ title, btnName, btnLink, imgSrc }) => {
  const title1 = title;
  const btnName1 = btnName;
  const btnLink1 = btnLink;
  const imgSrc1 = imgSrc;

  return (
    <>
      <div className="hero_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d_center">
              <div className="hero_left">
                <h1>{title1}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  neque sint veritatis ratione, molestias tenetur eaque odio
                  explicabo sequi nesciunt!
                </p>
                <NavLink to={btnLink1}>{btnName1}</NavLink>
              </div>
            </div>
            <div className="col-md-6 d_center mt-5 mt-md-0">
              <div className="hero_img">
                <img src={imgSrc1} alt="" className="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Common;
