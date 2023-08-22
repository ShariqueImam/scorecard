import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center ">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5 mt-5">
              <h3 className="font-weight-normal text-dark display-4">
                {this.props.title1}{" "}
                <span className="text-warning display-4">
                  {this.props.title2}
                </span>
              </h3>
              <p className="text-dark h3">{this.props.desc}</p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
