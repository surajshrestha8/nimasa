import React from "react";
import PreparationClassCard from "./PreparationClassCard";
import { PreparationCLassList } from "../constants/preparation-classes";

const PreparationClass = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginBottom: "30px", fontWeight: 700, fontSize: "35px" }}>
        Our preparation classes
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {PreparationCLassList.map((preparationClass) => (
          <PreparationClassCard
            key={preparationClass.title}
            title={preparationClass.title}
            content={preparationClass.content}
            icon={preparationClass.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default PreparationClass;
