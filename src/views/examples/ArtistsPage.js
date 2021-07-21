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
import firebase from "../../firebase.js";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ProductPageHeader from "components/Headers/ProductPageHeader.js";
import Cards from "../index-sections/ProfileCard.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import LoggedInIndexNavbar from "components/Navbars/LoggedInIndexNavbar";

function Navbar() {
  const user = firebase.auth().currentUser;
    if (user) {
      return <LoggedInIndexNavbar />
    } else {
      return <IndexNavbar />
    }
}

function ArtistsPage() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("artists-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <Navbar />
      <ProductPageHeader />
      <div className="section Product-content">
      
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
              <h1>
                The Artists on Freerush
              </h1>
              <br />
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Filters
              </Button>
              <br />
            </Col>
          </Row>
          gotta do some iteration thing for all our artists
          <Row>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
          </Row>
          <Row>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
          </Row>
          <Row>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
          </Row>
          <br />
          <Row>
          <Link to="/product-page" >
            <Button className="btn-link" color="info" href="#pablo">
              Back
            </Button>
          </Link>
          <Link to="/product-page" >
            <Button className="btn-link" color="info" href="#pablo">
              Next
            </Button>
          </Link>
            
          </Row>
          
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ArtistsPage;
