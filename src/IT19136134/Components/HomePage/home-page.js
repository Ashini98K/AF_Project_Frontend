import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import home from "../../Stylesheets/homepage.css";
import "@fontsource/poiret-one"; // Defaults to weight 400.
import FooterPage from "../Footer/footer-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import navBar from '../../../IT19135830/Components/ClientSideNavBar/navBar'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Route component={navBar}></Route>
        <Row className="rowstyle">
          <Col sm="1"></Col>
          <Col>
            <div className="divHomeImage">
              <div style={{ backdropFilter: "blur(2px)" }}>
                <h1
                  className="homeTopic"
                  style={{
                    fontFamily: "Poiret One",
                  }}
                >
                  International Conference on
                </h1>

                <h1
                  className="homeTopic"
                  style={{
                    fontFamily: "Poiret One",
                  }}
                >
                  Application Frameworks
                </h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="logoSliit"
                    style={{
                      width: "200px",
                      height: "200px",
                    }}
                  ></div>
                </div>
                <br></br>
                <h4 className="homeDate">3rd, 4th and 5th November 2021</h4>
                <h4 className="homesliit">
                  Sri Lanka Institute of Information Technology
                </h4>
              </div>
            </div>
            <br></br>
            <h6 className="aboutTopic">About Conference</h6>
            <p className="aboutParagragh ">
              The 1st International conference on Application Framework (ICAF)
              is organized by the Faculty of Computing of the Sri Lanka
              Institute of Information Technology (SLIIT) as an open forum for
              academics along with industry professionals to present the latest
              findings and research output. Primary objective of the ICAF is to
              uplift the research culture and the quality of research done by
              Sri Lankan researchers. This conference will create a platform for
              national and international researchers to showcase their research
              output, networking opportunities to discuss innovative ideas, and
              initiate collaborative work.
            </p>
            <br></br>
            <div className="callsOpen">
              <h4>Registrations are open for all now</h4>
              <h4>On!!!</h4>
            </div>
          </Col>

          <Col sm="1"></Col>
        </Row>
        <FooterPage />
      </div>
    );
  }
}

export default Homepage;
