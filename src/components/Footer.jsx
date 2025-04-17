import React from "react";
import Logo from "./Logo";
import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";
import ContactUs from "./ContactUs";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

function Footer() {
  const styles = {
    icon: {
      color: "var(--brand-primary)",
    },
  };

  return (
    <footer
      className="container-fluid text-dark py-4"
      style={{
        borderTop: "2px solid #00000010",
        background: "var(--white-glass)",
      }}
    >
      <section className="container w-100 h-100 bg-transparent py-5">
        <div className="branding d-flex justify-content-between align-items-start flex-wrap">
          <div className="logo">
            {/* <Logo></Logo> */}
            <h6
              className="h5 fw-regular text-dark my-4"
              style={{ fontFamily: "poppins-semibold" }}
            >
              &quot;Let your dreams take flight with purpose, <br></br> At
              Sirius, we shape visions into reality.&quot;
            </h6>
          </div>
          <ContactUs styles={styles}></ContactUs>
        </div>
        <NewsLetter />
        <SocialLinks></SocialLinks>
      </section>

      {screen.width >= 1080 ? (
        <section
          className="container pt-4 f-small d-flex justify-content-between align-items-center"
          style={{ borderTop: "1px solid #0c0c0c20" }}
        >
          {/* <h5 className="h6 fw-regular">&copy; All rights reserved 2025.</h5> */}
          <h6 className="h6" style={{ fontFamily: "poppins-regular" }}>
            Made By{" "}
            <span
              className="author-name"
              style={{ fontFamily: "poppins-semibold" }}
            >
              Madhan
            </span>{" "}
            with <i className="fas fa-heart text-danger"></i>
          </h6>

          <ul
            className="m-0 p-0 d-flex justify-content-center align-items-center"
            style={{ listStyle: "none" }}
          >
            <li className="mx-2" style={{ fontSize: "14px" }}>
              <Link to={"terms-and-conditions"}>Terms &amp; Conditions</Link>
            </li>
            <span
              className="mx-1 bg-dark"
              style={{
                width: "5px",
                height: "5px",
                // borderRadius: "50px",
              }}
            ></span>
            <li className="ms-2" style={{ fontSize: "14px" }}>
              <Link to={"privacy-policy"}>Privacy policy</Link>
            </li>
          </ul>
        </section>
      ) : (
        <></>
      )}
    </footer>
  );
}

export default Footer;
