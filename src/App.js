import React, { Component } from "react";
import Layout1 from "./Layouts/Layout1/Layout1";
// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/pe-icon-7.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="overflow-x-hidden w-[100vw]">
          <Layout1 />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
