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
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

// core components
import ProductPageHeader from "components/Headers/ProductPageHeader.js";
import Cards from "../index-sections/SmallProductCard.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Carousels from "../index-sections/Carousel.js";
import ProductCarousel from "../index-sections/ProductCarousel";

function ProductPage() {
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
      <ProductPageHeader />
      <IndexNavbar />
      <div className="section profile-content">
        <Container>
          <Row>
            <Col className="mr-auto" md="10">
              <h1 className="mb-1 text-muted">Cock Magic for guys</h1>
              <br></br>
            </Col>
            <div>
              <Row>
                <Col sm="10">
                  {/*                   <img
                    width="750"
                    height="400"
                    align="left"
                    src={require("assets/img/bird.jpg").default}
                    alt="ToCome"
                  /> */}
                  <ProductCarousel></ProductCarousel>
                </Col>
                <Col sm="2">
                  <Container>
                    <Col className="ml-auto">
                      <div className="owner">
                        <Link to="profile-page">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            width="100"
                            src={require("assets/img/faces/edward.jpg").default}
                            title="Check out their profile!"
                          />
                        </Link>
                        <div className="name">
                          <Link to="profile-page">
                            <h4
                              className="title"
                              title="Check out their profile!"
                            >
                              Edward Loke
                            </h4>
                          </Link>
                          <h6 className="description">Magician</h6>
                        </div>
                      </div>
                    </Col>
                    <hr />
                    <Row>
                      <div>
                        Rating/hour:
                        <h6>$100</h6>
                      </div>
                      <div>
                        Average rating:
                        <h6>5 stars</h6>
                      </div>
                      <div>
                        Procurement count: <h6>100</h6>
                      </div>
                    </Row>
                  </Container>
                </Col>
              </Row>
              &nbsp;
              <Row>
                <h5>
                  {" "}
                  The cock magic that all guys like, some like it harder than
                  the rest, but at the end of the day once it goes in the
                  customer is satisfied.{" "}
                </h5>
                &nbsp;
              </Row>
              <br />
              <Link to="profile-page">
                <Button className="btn-round" color="warning" outline="warning">
                  <i className="nc-icon nc-email-85" /> Chat
                </Button>
              </Link>
              &nbsp;
              <Link to="profile-page">
                <Button className="btn-round" color="warning" outline="warning">
                  <i className="nc-icon nc-credit-card" /> Purchase
                </Button>
              </Link>
              &nbsp;
              <Button className="btn-round" color="danger" outline="danger">
                <i className="nc-icon nc-credit-card" /> Check availability
              </Button>
            </div>
          </Row>
          <br />
        </Container>
      </div>
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
                Description
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
            <NavItem>
              <NavLink
                className={activeTab === "3" ? "active" : ""}
                onClick={() => {
                  toggle("3");
                }}
              >
                Extra Info
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <TabContent className="following" activeTab={activeTab}>
        <TabPane tabId="1" id="follows">
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <h4>
                this is a full essay on the elaboration of his service, his
                speech on why his Magic is better than the rest, why everyone
                deserves to give him and only him a shot and not the rest.
                <br />
                So why should you use me instead of someone else? It is because
                i know how to supise my clients. It is with a well placed
                spelling error.
              </h4>
              <br></br>
            </Col>
          </Row>
        </TabPane>
        <TabPane className="text-center" tabId="2" id="following">
          <Carousels></Carousels>
        </TabPane>
        <TabPane tabId="3" id="follows">
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <ul className="list-unstyled follows">
                <li>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="6" md="6" xs="6">
                      <h6>Rating/hour: $1000</h6>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="6" md="6" xs="6">
                      <h6>Recommended Time: 1/2 hour </h6>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="6" md="6" xs="6">
                      <h6>Average Rating: ⭐️⭐️⭐️⭐️⭐️</h6>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="6" md="6" xs="6">
                      <h6>Total Procurement count: 0</h6>
                    </Col>
                  </Row>
                </li>
              </ul>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      <hr></hr>
      <Row>
        <Col md="1"></Col>
        <Col className="mr-auto" md="11">
          <h1 className="mb-1 text-muted">Recommended for you</h1>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col className="ml-auto mr-auto" md="11">
          <Row>
            <Col>
              <Cards></Cards>
            </Col>
            <Col>
              <Cards></Cards>
            </Col>
            <Col>
              <Cards></Cards>
            </Col>
            <Col>
              <Cards></Cards>
            </Col>
          </Row>
        </Col>
      </Row>
      <DemoFooter />
    </>
  );
}

export default ProductPage;
