import React, { Component } from "react";
import { Col } from "reactstrap";

class ServiceBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.services.map((service, key) => (
          <Col key={key} lg={4} md={6}>
            <div className="service-box service-warning d-flex flex-column justify-content-center">
              <div className="mb-5 mx-auto">
                <i className={service.icon}></i>
              </div>
              <p className="text-muted service-subtitle mb-4">{service.desc}</p>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ServiceBox;
