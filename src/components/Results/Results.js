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
        <SectionTitle title1="Your  " title2="Results" desc="" />
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
        ></section>
      </Container>
    </div>
  );
};

export default Video;
