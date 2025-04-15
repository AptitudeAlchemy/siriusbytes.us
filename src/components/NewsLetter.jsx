import React from "react";
// import "../css/media_query.css";

function NewsLetter() {
  const styles = {
    input: {
      outline: "none",
      backgroundColor: "transparent",
    },
    formField: {
      border: "2px solid var(--brand-primary)",
      borderRadius: "8px",
    },
  };

  return (
    <>
      <div
        className="NewsLetter py-5 d-flex flex-wrap justify-content-between
         align-items-center"
      >
        <h2 className="h4 text-uppercase">
          Join with us for <br></br>newsletters
        </h2>
        <form
          action=""
          className="w-20 form p-2 d-flex justify-content-center align-items-center flex-wrap"
        >
          <div className="input bg-transparent" style={styles.formField}>
            <i
              className="fas fa-envelope mx-2"
              style={{ color: "var(--brand-primary)" }}
            ></i>
            <input
              style={styles.input}
              className="px-2 py-2 border-0"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email address"
            />
          </div>
          <button
            className="w-20 mx-2 submit border-0 px-4 py-2 fw-bold text-light"
            style={{
              backgroundColor: "var(--brand-primary)",
              fontFamily: "poppins-regular",
              borderRadius: "8px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default NewsLetter;
