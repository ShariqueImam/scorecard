import React from "react";
import { Container, Row } from "reactstrap";
import SectionTitle from "../common/section-title";
import useWindowSize from "../../hooks/useWindowSize";
const Video = () => {
  const { width } = useWindowSize();
  return (
    <div id="image">
      {" "}
      <Container>
        <SectionTitle
          title1="Developed by agents,"
          title2=" for agents"
          desc=""
        />
        <section
          className="videoContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: `${width < 500 ? "column" : "row"}`,
            width: "90%",
            margin: "0 auto",
          }}
        >
          <p
            className="videoText"
            style={{
              width: "100%",
            }}
          >
            Scorecard is born from contact center leaders and the best in class
            agents from the organizations strictest in quality standard
            including Citi, Amazon, PayPal, and Bank of America- and coaches
            agents on proven best practices in delivering a white glove service,
            in a simple, easy digestion format.
          </p>
          <video src="" className="videoItself"></video>
          <p
            className="videoItself"
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "30vh",
              border: "2px solid black",
            }}
          >
          Image Here
          </p>
        </section>
      </Container>
    </div>
  );
};

export default Video;
