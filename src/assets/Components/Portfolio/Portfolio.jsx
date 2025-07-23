import "./Portfolio.css";
import img1 from "../../../assets/images/poert1.png";
import img2 from "../../../assets/images/port2.png";
import img3 from "../../../assets/images/port3.png";

export default function Portfolio() {
  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <div className="mb-3">
      <div className="pt-2">
        <div className="text-center pt-2" style={{ color: "#2c3e50" }}>
          <h2 className="text-uppercase mb-2 fs-1 fw-bolder">
            portfolio component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div
              className="line me-3"
              style={{ backgroundColor: "#2c3e50" }}
            ></div>
            <i className="fa-solid fa-star"></i>
            <div
              className="line ms-3"
              style={{ backgroundColor: "#2c3e50" }}
            ></div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row g-4">
            {images.map((imgSrc, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="rounded-3 overflow-hidden position-relative portfolio-item">
                  <img
                    src={imgSrc}
                    alt={`portfolio ${idx + 1}`}
                    className="w-100 rounded-3"
                  />
                  <div className="layer__ d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="model__ d-none">
          <img alt="" src="" />
        </div>
      </div>
    </div>
  );
}
