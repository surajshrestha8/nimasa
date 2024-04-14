import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ServiceCardProps {
  icon: IconProp;
  title: string;
  content: string;
}

const ServiceCard = ({ icon, title, content }: ServiceCardProps) => {
  return (
    <div
      style={{
        padding: "40px 20px",
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "420px",
        height: "400px",
        fontStyle: "inherit",
        border: "1px solid #f0f0f0",
      }}
    >
      <h5
        style={{
          fontWeight: "bold",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <FontAwesomeIcon
          style={{ marginBottom: "15px" }}
          color="#b2b2be"
          height={40}
          width={40}
          icon={icon}
        />
        <span>{title}</span>
      </h5>
      <p style={{ textAlign: "justify", marginBottom: "1.5em" }}>{content}</p>
    </div>
  );
};

export default ServiceCard;
