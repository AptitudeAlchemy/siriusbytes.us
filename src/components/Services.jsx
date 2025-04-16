import React, { useEffect, useState } from "react";
import "../css/Services.css";
import ServiceCard from "./ServiceCard";
import services from "../data/services.json";

function Services() {
  return (
    <section
      id="services"
      className="Services f-roboto-regular container d-flex justify-content-start align-items-center py-5 flex-column"
      style={{ minHeight: "50vh" }}
    >
      <h1 className="h2 text-uppercase">what we do</h1>

      <ul className="row p-0 w-100 pt-5 d-flex justify-content-center align-items-center">
        {services.map((item) => (
          <ServiceCard card={item} key={item._id}></ServiceCard>
        ))}
      </ul>
    </section>
  );
}

export default Services;
