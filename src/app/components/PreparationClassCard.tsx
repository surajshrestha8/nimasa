import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface PreparationClassCardProps {
  title: string;
  content: string;
  icon: IconProp;
}

const PreparationClassCard = ({
  title,
  content,
  icon,
}: PreparationClassCardProps) => {
  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingBottom: "20px",
        paddingTop: "20px",
        backgroundColor: "#f7f8f9",
        width: "600px",
        minWidth: "200px",
        display: "flex",
        flexDirection: "column",
        fontSize: "20px",
        textAlign: "left",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={icon} height={50} width={50} color="#054d7f" />
        <h3 style={{ fontSize: "29px", fontWeight: 700, marginLeft: "20px" }}>
          {title}
        </h3>
      </div>
      <p style={{ marginBottom: "1.5em", marginTop: "20px" }}>{content}</p>
      <button
        style={{ width: "250px", textAlign: "left", color: "#1b64a4" }}
        className=" background-transparent font-bold uppercase outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Read More {">"}
      </button>
    </div>
  );
};

export default PreparationClassCard;
