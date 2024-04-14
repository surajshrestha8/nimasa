import React from "react";
import ServiceCard from "./ServiceCard";
import { Services } from "../constants/services";

const Service = () => {
  return (
    <>
      <div style={{ padding: "40px 20px", maxWidth: "100vw" }}>
        <h5
          style={{
            textAlign: "center",
            fontWeight: 300,
            textTransform: "capitalize",
            marginBottom: "10px",
            color: "#abb8c3",
            fontSize: "20px",
          }}
        >
          Our Services
        </h5>
        <h2
          style={{
            fontSize: "35px",
            textAlign: "center",
            fontWeight: 700,
            textTransform: "capitalize",
            marginBottom: 0,
          }}
        >
          What we do?
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "20px",
            color: "#575760",
          }}
        >
          We are committed to providing a wide range of services.
        </p>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {Services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>
    </>
  );
};

export default Service;
