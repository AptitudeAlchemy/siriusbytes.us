import React from "react";

function ContactUs({ styles }) {
  return (
    <ul className="contact-us" style={{ listStyle: "none" }} id="contact-us">
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
        <i className="fas fa-phone mx-2" style={styles.icon}></i> +91 9384727902
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
  );
}

export default ContactUs;
