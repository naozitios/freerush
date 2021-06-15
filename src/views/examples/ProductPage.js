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
import { Button, NavItem, Container, Row, Col } from "reactstrap";

// core components
import ProductPageHeader from "components/Headers/ProductPageHeader.js";
import Cards from "../index-sections/ProductCard.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import FilterButton from "../index-sections/FilterButton.js";
import SortButton from "../index-sections/SortButton.js";

function ProductPage() {
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
              <h5>
                The cock magic that all guys like, some like it harder than the
                rest, but at the end of the day once it goes in the customer is
                satisfied.
              </h5>
            </Col>
            <div>
              <Row>
                <Col sm="9">
                  <img
                    width="700"
                    height="400"
                    align="left"
                    src={require("assets/img/bird.jpg").default}
                  />
                </Col>
                <Col sm="3">
                  <Container>
                    <Col className="ml-auto" md="10">
                      <div className="owner">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          width="100"
                          src={require("assets/img/faces/edward.jpg").default}
                        />
                        <div className="name">
                          <h4 className="title">Edward Loke</h4>
                          <h6 className="description">Magician</h6>
                          <Link to="profile-page">
                            <Button
                              className="btn-round"
                              color="default"
                              outline
                            >
                              <i className="nc-icon nc-badge" /> Profile
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Container>
                </Col>
              </Row>
              <p> Some words </p>
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
            </div>
          </Row>
          <br />
          <br />
          <div>
            <hr></hr>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h1>Other Works</h1>
              <br />
            </Col>
          </Row>
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
          <br />
          <Row>
            <Link to="/product-page">
              <Button className="btn-link" color="info" href="#pablo">
                Back
              </Button>
            </Link>
            <Link to="/product-page">
              <Button className="btn-link" color="info" href="#pablo">
                Next
              </Button>
            </Link>
            <Link to="profile-page">
              <Button className="btn-round" color="default" outline>
                <i className="nc-icon nc-badge" /> Profile
              </Button>
            </Link>
          </Row>
        </Container>
      </div>

      <DemoFooter />
    </>
  );
}

export default ProductPage;
