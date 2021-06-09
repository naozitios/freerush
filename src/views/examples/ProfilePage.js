/*!

this is the page

https://demos.creative-tim.com/paper-kit-react/#/profile-page?ref=pkr-github-readme

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
//import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Cards from "../index-sections/ProductCard.js";
import Carousels from "../index-sections/Carousel.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

// reactstrap components


function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/edward.jpg").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Edward Loke <br />
              </h4>
              <h6 className="description">Magician</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <blockquote className="blockquote">
                <p className="mb-0">Some descriptions about this fella, limit it to about 500 words?
                talk about some things about himself. Maybe he used to be a stripper but now he is 
                a magician. Basically, what looks good for people to procure his services.
                </p>
              </blockquote>
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="nc-icon nc-badge" />  Past works
              </Button>
            </Col>
          </Row>
          <div> 
            <hr></hr>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h1>
                Current talents
              </h1>
              <br />
            </Col>
          </Row>
          <Row>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Stats
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Reviews
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-centre" lg="8" md="10" xs="10">
                          <h6>
                            Average Rating: ⭐️⭐️⭐️⭐️⭐️
                          </h6>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col className="ml-auto mr-centre" lg="8" md="10" xs="10">
                          <h6>
                            Total Procurement count: 0
                          </h6>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <Carousels></Carousels>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
