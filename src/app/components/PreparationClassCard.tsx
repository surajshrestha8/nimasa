import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PreparationClassCard = () => {
  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingBottom: "20px",
        paddingTop: '20px',
        backgroundColor: "#f7f8f9",
        width: "600px",
        minWidth: '200px',
        display: "flex",
        flexDirection: "column",
        fontSize: "20px",
        textAlign: "left",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faAddressBook}
          height={50}
          width={50}
          color="#054d7f"
        />
        <h3 style={{ fontSize: "29px", fontWeight: 700, marginLeft: "20px" }}>
          IELTS
        </h3>
      </div>
      <p style={{ marginBottom: "1.5em", marginTop: "20px" }}>
        IELTS means International English Language Testing System and it is a
        test of English language proficiency. The test is designed to assess the
        language ability of non-native speakers of English…
      </p>
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
