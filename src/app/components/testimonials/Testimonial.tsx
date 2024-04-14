import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div
      style={{
        backgroundColor: "#e8f3f9",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: 700,
          textTransform: "uppercase",
          marginBottom: "40px",
          fontSize: "35px",
        }}
      >
        Our Happy Students
      </h2>
      <div style={{ display: "flex", gap: '20px', flexWrap: 'wrap' }}>
        <TestimonialCard /> 
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
