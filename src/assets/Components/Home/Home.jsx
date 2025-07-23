import React from 'react'
import image from "../../../assets/avataaars.svg";


export default function Home() {
  return (
    <>
      <div className="home p-5 d-flex justify-content-center align-items-center text-white">
        <div className="text-center ">
          <div className="container px-4">
            <img src={image} alt="" className="mb-3 w-75" />
          </div>

          <div className="text-center w-100 pt-4" style={{ color: "white" }}>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              Start Framework
            </h2>

            <div className="d-flex align-items-center justify-content-center mb-3">
              <div
                className="line me-3"
                style={{ backgroundColor: "white" }}
              ></div>
              <i className="fa-solid fa-star"></i>
              <div
                className="line ms-3"
                style={{ backgroundColor: "white" }}
              ></div>
            </div>
          </div>

          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  );
}
