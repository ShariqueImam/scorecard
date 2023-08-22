import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-2.png";
import feature3 from "../../assets/images/features/img-3.png";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          img: feature1,
          icon: "mdi  mdi-rocket",
          title: "White Glove Quality",
          desc: "Developed from the JD Power and Associate’s quality standard, in addition to partnership from leading service organization leadership, scorecard provides actionable feedback using emotional AI, customer sentiment, and customer verbatims.",
          link: "/",
        },
        {
          id: 2,
          img: feature2,
          icon: "mdi  mdi-account-group",
          title: "Operational Efficiency",
          desc: "Based on single contact resolution, scorecard measures total completed contacts divided by agent paid hours to measure efficiency while proactively identifying roadblocks in the customer journey and addressing wildcards, such as recontacts.",
          link: "/",
        },
        {
          id: 3,
          img: feature3,
          icon: "mdi  mdi-chart-bell-curve",
          title: "Behavior based coaching",
          desc: "Go beyond numbers and data, and drive action + sustainable behavior changes based on the agent’s individual learning style and create sustainable change and positive team growth ",
          link: "/",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <SectionTitle
              title1="What "
              title2="We Do "
              desc="10+ years of turning agents into experts"
            />

            <FeatureBox features={this.state.features} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
