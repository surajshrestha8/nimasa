import Image from "next/image";
import React from "react";

const CeoMessage = () => {
  return (
    <div
      style={{
        padding: "60px 20px 40px",
        maxWidth: "100vw",
        backgroundColor: "#8ed1fc",
        height: "fit-content",
        display: "flex",
        textAlign: "justify",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "50px",
          paddingBottom: "10px",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "20px",
            marginLeft: "5px",
            alignItems: "center",
          }}
        >
          Message from Ceo
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          Dear friends,{" "}
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed
          blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis
          bibendum ut tristique et egestas quis ipsum suspendisse ultrices
          gravida dictum fusce
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed
          blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis
          bibendum ut tristique et egestas quis ipsum suspendisse ultrices
          gravida dictum fusce
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed
          blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis
          bibendum ut tristique et egestas quis ipsum suspendisse ultrices
          gravida dictum fusce
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          Sincerely,
          <br />
          <strong>Saugat Pageni</strong>
          <br />
          <strong>Chief Executive Officer</strong>
        </p>
      </div>
      <div
        style={{
          width: "50%",
          paddingLeft: "50px",
          paddingBottom: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "700px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            src="/ceo-example.jpg"
            height={600}
            width={600}
            alt="ceo-image"
            fill={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
