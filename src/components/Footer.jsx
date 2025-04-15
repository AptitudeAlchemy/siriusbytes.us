import React from "react";
import Logo from "./Logo";
import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";

function Footer() {
  const socialMediaLinks = [
    {
      _id: 0,
      title: "instagram",
      icon: "fa-instagram",
      link: "instagram.com/siriusbytes.us/",
    },
    {
      _id: 1,
      title: "linkedin",
      icon: "fa-linkedin",
      link: "linkedin.in/siriusbytes.us/",
    },
    { _id: 2, title: "x", icon: "fa-twitter", link: "x.com/siriusbytes.us/" },
    {
      _id: 3,
      title: "youtube",
      icon: "fa-youtube",
      link: "youtube.com/siriusbytes.us/",
    },
  ];

  const quickLinks = {
    _id: 0,
    title: "Quick menu",
    links: [
      { _id: 0, title: "home", route: "home" },
      { _id: 1, title: "home", route: "home" },
      { _id: 2, title: "home", route: "home" },
      { _id: 3, title: "home", route: "home" },
      { _id: 4, title: "home", route: "home" },
    ],
  };

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
          <Logo></Logo>
          <ul className="contact-us">
            <h6
              className="h6 f-regular fw-bold text-uppercase pb-2"
              style={{ borderBottom: "2px solid var(--brand-primary)" }}
            >
              Contact us
            </h6>
            <li className="fw-regular my-2 mt-4">
              <i className="fas fa-book mx-2" style={styles.icon}></i> 9/271,
              Edappalyam, Redhills, Chennai - 52.
            </li>
            <li className="fw-regular my-2">
              <i className="fas fa-phone mx-2" style={styles.icon}></i> +91
              9384727902
            </li>
            <li className="link my-2">
              <i className="fas fa-envelope mx-2" style={styles.icon}></i>
              &nbsp;
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=madhan796.m@gmail.com"
                target="_blank"
              >
                madhan796.m@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <NewsLetter />
        {/* <div className="branding"> */}
        <div className="my-1 social-links">
          <h2 className="mx-2 h6 f-poppins-regular">Follow Us On</h2>
          {socialMediaLinks.map((item) => (
            <button className="btn text-secondary m-2 p-2 px-3 rounded border-0 outline-0">
              <a
                href={`https://www.${item.link}`}
                className="h4"
                _target="blank"
              >
                <i className={`fab ${item.icon}`}></i>
              </a>
            </button>
          ))}
        </div>
        {/* </div> */}
      </section>

      {screen.width >= 1080 ? (
        <section
          className="container f-small"
          style={{ borderTop: "1px solid #0c0c0c20" }}
        >
          <h6
            className="h6 pt-4 text-center"
            style={{ fontFamily: "poppins-regular" }}
          >
            Made By{" "}
            <span
              className="author-name"
              style={{ fontFamily: "poppins-semibold" }}
            >
              Madhan
            </span>{" "}
            with <i className="fas fa-heart text-danger"></i>
          </h6>
        </section>
      ) : (
        <></>
      )}
    </footer>
  );
}

export default Footer;
