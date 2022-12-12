import React, { useState } from "react";
const Contact = () => {
  const [data, setData] = useState({});
  const inputEvent = (event) => {
    // const [name, value] = event.target;
    const name = event.target.name;
    const value = event.target.value;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    alert(
      `the full name is = ${data.fullName} and phone numver is = ${data.phone} and email is = ${data.email} and the message is = ${data.message}`
    );
    console.log(data);
  };
  return (
    <>
      <div className="contact_us my-5">
        <div className="container">
          <h1 className="text-center">Please fill the forms</h1>
          <form action="" onSubmit={onSubmit}>
            <div className="input_box">
              <label htmlFor="" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="fullName"
                value={data.fullName || ""}
                onChange={inputEvent}
              />
            </div>
            <div className="input_box mt-3">
              <label htmlFor="" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={data.email || ""}
                onChange={inputEvent}
              />
            </div>
            <div className="input_box mt-3">
              <label htmlFor="" className="form-label">
                Number:
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Mobile No."
                name="phone"
                value={data.phone || ""}
                onChange={inputEvent}
              />
            </div>
            <div className="input_box mt-3">
              <label htmlFor="" className="form-label">
                Message:
              </label>
              <textarea
                id=""
                cols="30"
                rows="5"
                className="form-control"
                placeholder="Enter Your Message"
                name="message"
                value={data.message || ""}
                onChange={inputEvent}
              ></textarea>
            </div>
            <div className="input_box mt-3">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
