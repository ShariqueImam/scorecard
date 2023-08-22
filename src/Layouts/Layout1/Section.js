import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
//Import Images
import hero1 from "../../assets/images/hero-1-img.png";
import img from "../../assets/images/7.jpg";
class Section extends Component {
  render() {
    const Bg = styled.div`
      background: radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url(${img});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: auto;
      height: 100vh;
      width: 100vw;
    `;
    return (
      <React.Fragment>
        <Bg
          className="hero-1-bg position-relative bg-light d-flex align-items-center homeBg"
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="hero-title pr-lg-5">
                  <h1 className="hero-1-title mb-4 fw-normal line-height-1_4 display-2 text-white">
                    Agent friendly SMART coaching
                  </h1>
                  <p className="text-muted text-light mb-4 pb-2 h5 fw-light">
                    Easy adoption quality improvement for growing contact
                    centers
                  </p>
                  <section className="d-flex">
                    <button className="btn btn-warning d-flex align-items-center justify-content-center">
                      See Demo
                      <span className="ml-2 right-icon">&#8594;</span>
                    </button>
                    <button className="btn btn-warning mx-4 d-flex align-items-center justify-content-center">
                      Join Pilot
                      <span className="ml-2 right-icon">&#8594;</span>
                    </button>
                  </section>
                </div>
              </Col>
              <Col lg={6}>
                <div className="mt-5 mt-lg-0">
                  <img
                    src={hero1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Bg>
      </React.Fragment>
    );
  }
}

export default Section;
