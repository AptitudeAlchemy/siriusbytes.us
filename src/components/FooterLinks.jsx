import React from "react";

function FooterLinks({ link }) {
  const styles = {
    borderBottom: {
      borderBottom: "2px solid var(--brand-primary)",
    },
  };

  return (
    <div className="text-left mx-4">
      <h5
        className="h6 py-1 mx-1 text-dark f-regular fw-bold text-uppercase"
        style={styles.borderBottom}
      >
        {link.title}
      </h5>
      <ul className="m-0 p-2 px-0 text-left mx-1">
        {link.links.map((item) => (
          <li>
            <a
              href={`#${item.route}`}
              className="link text-capitalize text-secondary"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
