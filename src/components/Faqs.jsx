import React from "react";
import faqs from "../data/faqs";

function Faqs() {
  const styles = {
    heading: {
      borderBottom: "2px solid var(--brand-primary)",
    },
  };

  return (
    <section className="faq-section f-roboto-regular py-4 container bg-transparent text-center flex-column d-flex justify-content-center align-items-center">
      <h2 className="h2 mb-4 text-uppercase" style={styles.heading}>
        FaQs
      </h2>
      <ul className="m-0 p-0 w-100">
        {faqs.map((item, index) => (
          <li
            key={index}
            className="mb-2 px-0 border"
            style={{ background: "white", listStyle: "none" }}
          >
            <details className="p-4 m-0 w-100 d-flex justify-content-start align-items-start flex-column">
              <>
                <summary className="h5 fw-bold f-roboto-regular text-start">
                  {item.question}
                  {/* <i className="fas fa-angle-down"></i> */}
                </summary>
              </>
              <p
                className="content px-4 h6 text-secondary f-poppins-medium text-wrap"
                style={{
                  background: "white",
                  textAlign: "left",
                  minHeight: "5vh",
                }}
                dangerouslySetInnerHTML={{ __html: item.answer }}
              ></p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Faqs;
