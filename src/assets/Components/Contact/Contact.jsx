import "./Contact.css";

export default function Contact() {
  const fields = ["userName", "userAge", "userEmail", "userPassword"];

  return (
    <div className="mb-4">
      <div className="pt-3 container">
        <div className="text-center pt-4" style={{ color: "#2c3e50" }}>
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            contact section
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

        <form className="w-50 p-3 mx-auto mt-5 contact-form" noValidate>
          {fields.map((field) => (
            <div className="form-group position-relative mb-4" key={field}>
              <input
                type="text"
                id={field}
                name={field}
                placeholder=" " 
                className=" floating-input"
                required
                autoComplete="off"
              />
              <label htmlFor={field} className="floating-label">
                {field} :
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="btn mt-4 text-white"
            style={{ backgroundColor: "#1abc9c" }}
          >
            send Message
          </button>
        </form>
      </div>
    </div>
  );
}
