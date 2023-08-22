import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import featurebg from "../../assets/images/features/features-bg.png";

class FeatureBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.features.map((feature, key) =>
                    (feature.id % 2 !== 0) ?
                        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
                            <Col md={5} style={{background : `url(${featurebg}) center center`}}>
                                <div className="features-img">
                                    <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
                                </div>
                            </Col>
                            <Col md={{size:6, offset:1}}>
                                <div className="features-box mt-5 mt-sm-0 mb-4">
                                    <div className="features-icon my-4">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                                    <p className="text-muted mb-3 f-15">{feature.desc}</p>
                                </div>
                            </Col>
                        </Row>
                    :
                    <Row key={key} className="align-items-center mt-5">
                        <Col md={6}>
                            <div className="features-box mb-4">
                                <div className="features-icon my-4">
                                    <i className="mdi mdi-account-group"></i>
                                </div>
                                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                            </div>
                        </Col>
                        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0" style={{background : `url(${featurebg}) center center`}}>
                            <div className="features-img">
                                <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
                            </div>
                        </Col>
                    </Row>
                    )
                }
            </React.Fragment>
        );
    }
}

export default FeatureBox;