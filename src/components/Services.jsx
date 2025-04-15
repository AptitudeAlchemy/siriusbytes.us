import React from "react";
import "../css/Services.css";
import ServiceCard from "./ServiceCard";

function Services() {
  const services = [
    {
      _id: 0,
      highlight: "Web",
      title: "application development",
      image: "web-dev",
      // description:
      //   "Design and develop responsive, user-friendly web applications using HTML, CSS, JavaScript, and Bootstrap—ensuring clean design, smooth interactions, fast load times, and responsive ui.",
      isAvaliable: true,
    },
    {
      _id: 1,
      highlight: "Desktop",
      title: "app development",
      image: "desktop-dev",
      // description:
      //   "Craft robust Java desktop applications with cross-platform compatibility, intuitive UI/UX, and high-performance functionality—ideal for business tools, utilities, and personal computing software.",
      isAvaliable: false,
    },
    {
      _id: 2,
      highlight: "Android",
      title: "app development",
      image: "android-dev",
      // description:
      //   "Develop high-performance Android mobile apps—optimized for user engagement, speed, and functionality across all devices, tailored to meet unique business goals and customer expectations.",
      isAvaliable: false,
    },
    {
      _id: 3,
      highlight: "SpringBoot",
      title: "app development",
      image: "spring-boot-dev",
      // description:
      //   "We develop robust backend systems using Spring Boot and Java—delivering high-performance, scalable, and maintainable APIs and microservices tailored to your enterprise needs.",
      isAvaliable: true,
    },
    {
      _id: 4,
      highlight: "ReactJs",
      title: "application development",
      image: "react-dev",
      // description:
      //   "Build dynamic, responsive, and modern web interfaces using ReactJS—delivering smooth user experiences, scalable frontend architecture, and high-performance single-page applications.",
      isAvaliable: true,
    },
    {
      _id: 5,
      highlight: "NodeJs",
      title: "backend development",
      image: "nodejs-dev",
      // description:
      //   "Power applications with fast, scalable, and secure backend using NodeJS—real-time operations, efficient server-side performance, and seamless integration across platforms and services.",
      isAvaliable: true,
    },
    {
      _id: 6,
      highlight: "Python",
      title: "backend development",
      image: "python-dev",
      // description:
      //   "Deliver sleek, scalable, and secure web solutions using Flask—custom Python backends designed for simplicity, rapid development, and seamless integration with modern frontend technologies.",
      isAvaliable: true,
    },
  ];

  return (
    <section
      id="services"
      className="Services f-roboto-regular container d-flex justify-content-start align-items-center py-5 flex-column"
      style={{ minHeight: "50vh" }}
    >
      <h1 className="h2 text-uppercase">what i do</h1>

      <ul className="row p-0 w-100 pt-5 d-flex justify-content-center align-items-center">
        {services.map((item) => (
          <ServiceCard card={item} key={item._id}></ServiceCard>
        ))}
      </ul>
    </section>
  );
}

export default Services;
