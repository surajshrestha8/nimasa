import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
        backgroundColor: "#074f80",
        alignItems: "center",
        padding: "40px",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "5px" }}>
        <SocialIcon network="whatsapp" />
        <SocialIcon network="facebook" />
        <SocialIcon network="instagram" />
        <SocialIcon network="github" />
      </div>
      <div style={{ color: "white" }}>
        © 2024 NIMASA All rights reserved.Website by{" "}
        <Link href="https://github.com/surajshrestha8"> Suraj Shrestha.</Link>{" "}
      </div>
    </footer>
  );
};

export default Footer;
