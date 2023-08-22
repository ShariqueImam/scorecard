import React from "react";
import { Container, Row } from "reactstrap";
import SectionTitle from "../common/section-title";
import useWindowSize from "../../hooks/useWindowSize";
const Video = () => {
  const { width } = useWindowSize();
  return (
    <div id="video">
      {" "}
      <Container>
        <SectionTitle title1="Try " title2="This" desc="" />
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
            Scorecard offers automated SMART coaching scorecards that deliver a
            360 degree view of an agents strengths, and areas of opportunity-
            which not only drive meaningful coaching sessions between leader and
            agent, but also truly develops the agent to deliver white glove
            service to your customers.
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
            Video Here
          </p>
        </section>
      </Container>
    </div>
  );
};

export default Video;
