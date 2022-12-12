import React from "react";
import Servicebox from "./Servicebox";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <>
      <div className="service_box my-5">
        <div className="container">
          <div className="row">
            {Sdata.map((value, index) => {
              return (
                <Servicebox
                  key={index}
                  title={value.title}
                  imgSrc={value.imgSrc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
