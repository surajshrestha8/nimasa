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
          Dear Valued Students, Parents, and Partners,
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          As the CEO of Nimasa Education Consultancy, it is with great pleasure
          and excitement that I extend a warm welcome to each of you.
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          At Nimasa Education Consultancy, we understand the transformative
          power of education and the profound impact it has on shaping futures.
          Our mission is to guide and support students in their pursuit of
          quality education abroad, opening doors to endless opportunities and
          experiences that transcend borders. With a steadfast commitment to
          excellence and a passion for personalized service, we are dedicated to
          helping you navigate the complexities of the global education
          landscape. Whether you aspire to study in prestigious universities,
          pursue specialized programs, or explore new academic horizons, our
          team of experienced consultants is here to empower you every step of
          the way.
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          Through strategic partnerships with leading institutions worldwide, we
          offer comprehensive guidance tailored to your unique aspirations,
          ensuring that you make informed decisions that align with your
          academic and career goals. From admissions assistance to visa support
          and beyond, we are your trusted allies, providing unwavering support
          and guidance throughout your educational journey.
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          As we embark on this collaborative endeavor, I invite you to envision
          the possibilities that lie ahead and embrace the opportunities that
          await you. Together, let us unlock the doors to a world of knowledge,
          growth, and endless possibilities.
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          Thank you for choosing Nimasa Education Consultancy as your partner in
          education. We look forward to embarking on this transformative journey
          with you.
        </p>
        <p style={{ fontSize: "20px", marginBottom: "1.5em" }}>
          Warm regards,
          <br />
          <strong>Bimal Dhakal</strong>
          <br />
          <strong>CEO, Nimasa Education Consultancy</strong>
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
