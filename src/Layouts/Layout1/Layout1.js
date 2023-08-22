import React, { Component, Suspense } from "react";

const NavbarPage = React.lazy(() =>
  import("../../components/Navbar/Navbar_Page")
);
const Section = React.lazy(() => import("./Section"));
const Service = React.lazy(() => import("../../components/Service/service"));
const About = React.lazy(() => import("../../components/About/about"));
const Feature = React.lazy(() => import("../../components/Features/feature"));
const Counter = React.lazy(() => import("../../components/Counter/counter"));
const Clients = React.lazy(() => import("../../components/Clients/Clients"));
// const GetInTouch = React.lazy(() => import('../../components/GetInTouch/GetInTouch'));
const Subscribe = React.lazy(() =>
  import("../../components/Subscribe/Subscribe")
);
const Footer = React.lazy(() => import("../../components/Footer/footer"));
const Video = React.lazy(() => import("../../components/Video/Video"));
const Image = React.lazy(() => import("../../components/Image/Image"));
const Results = React.lazy(() => import("../../components/Results/Results"));

class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "services", navheading: "Services" },
        { id: 3, idnm: "video", navheading: "Try" },
        { id: 4, idnm: "features", navheading: "What We Do" },
        { id: 5, idnm: "image", navheading: "About" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: false });
    }
  };

  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          <NavbarPage
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
          />
          <Section />
          <Service />
          <Video />
          <Results />
          <Feature />
          <About />
          <Counter />
          <Image />
          {/* <Clients /> */}
          {/* <GetInTouch/> */}
          {/* <Subscribe /> */}
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Layout1;
