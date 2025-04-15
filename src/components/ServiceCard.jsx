import React from "react";
import Button from "./Button";

function ServiceCard({ card }) {
  const clientWidth = screen.width;

  const bgColor = card.isAvaliable ? "success" : "warning";

  return (
    <>
      <li
        className={`p-4 mb-5 col ServiceCard card w-100 h-100 bg-trasparent border ${
          clientWidth < 768 ? "mx-0" : "mx-2"
        }`}
        style={{ backgroundColor: "var(--white-glass)" }}
      >
        <div className="badge w-100 text-end f-poppins-medium">
          <span
            className={`tag p-2 bg-${bgColor}`}
            style={{
              textAlign: "right",
              width: "fit-content",
              borderRadius: "4px",
            }}
          >
            {card.isAvaliable ? "Available" : "Upcoming"}
          </span>
        </div>

        <img
          src={`/siriusbytes.us/${card.image}.webp`}
          alt=""
          className="py-5 mx-auto"
          // width={150}
          height={250}
          style={{ objectFit: "contain" }}
        />
        <h4 className="h4 mt-4 card-title text-uppercase">
          <span className="highlight" style={{ color: "var(--brand-primary)" }}>
            {card.highlight}
          </span>
          &nbsp;<br></br>
          {card.title}
        </h4>
        <p
          className="card-description text-lowercase text-secondary"
          style={{ fontSize: "16px", lineHeight: 1.2 }}
        >
          {/* {card.description.length > 50
            ? card.description.substring(0, 50) + "..."
            : card.description} */}
          {card.description}
        </p>

        <Button title={"Build"} route={""} icon={"angle-right"}></Button>
      </li>
    </>
  );
}

export default ServiceCard;
