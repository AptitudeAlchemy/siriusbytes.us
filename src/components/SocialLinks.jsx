import React from "react";

function SocialLinks() {
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
    {
      _id: 2,
      title: "x",
      icon: "fa-twitter",
      link: "x.com/siriusbytes.us/",
    },
    {
      _id: 3,
      title: "youtube",
      icon: "fa-youtube",
      link: "youtube.com/siriusbytes.us/",
    },
  ];

  return (
    <section className="my-1 social-links">
      <h2 className="mx-2 h6 f-poppins-regular">Follow Us On</h2>
      {socialMediaLinks.map((item) => (
        <button
          key={item._id}
          className="btn text-secondary m-2 p-2 px-3 rounded border-0 outline-0"
        >
          <a href={`https://www.${item.link}`} className="h4" _target="blank">
            <i className={`fab ${item.icon}`}></i>
          </a>
        </button>
      ))}
    </section>
  );
}

export default SocialLinks;
