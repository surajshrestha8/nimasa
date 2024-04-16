/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CeoMessage from "./CeoMessage";
import Service from "./Service";
import PreparationClass from "./PreparationClass";
import Testimonial from "./testimonials/Testimonial";
import Enquiry from "./enquiry/Enquiry";
import ImageSlider from "./image-slider/ImageSlider";

const Intro = () => {
  return (
    <>
      <ImageSlider />
      <div
        style={{
          width: "100vw",
          padding: "40px 20px",
          height: "fit-content",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{ width: "50%", paddingLeft: "40px", paddingBottom: "30px" }}
        >
          <h2 style={{ color: "#d20000", fontSize: "35px", marginBottom: 0 }}>
            WHO WE ARE
          </h2>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1em",
              marginBottom: 0,
              textAlign: "justify",
            }}
          >
            We are a team of dedicated professionals with extensive experience
            in the field of international education. Our advisors,
            counselors,and mentors are committed to providing personalized
            support to students from all backgrounds. Whether you're a high
            school student exploring study abroad options or a working
            professional seeking advanced degrees overseas, we're here to help
            you navigate the complexities of the global education landscape.
          </p>
        </div>
        <div
          style={{ width: "50%", paddingLeft: "40px", paddingBottom: "30px" }}
        >
          <p style={{ fontSize: "21px", marginBottom: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <CeoMessage />
      <Service />
      <PreparationClass />
      {/* <Testimonial /> */}
      <Enquiry />
    </>
  );
};

export default Intro;
