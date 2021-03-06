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
import Cards from "../index-sections/ProductCard.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import FilterButton from "../index-sections/FilterButton.js";
import SortButton from "../index-sections/SortButton.js";
import LoggedInIndexNavbar from "components/Navbars/LoggedInIndexNavbar";

function Navbar() {
  const user = firebase.auth().currentUser;
    if (user) {
      return <LoggedInIndexNavbar />
    } else {
      return <IndexNavbar />
    }
}

function SearchPage() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
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
                Services our Artists Offer
              </h1>
              <br />
            </Col>
          </Row>
          <Row>
            <FilterButton></FilterButton>
            &nbsp;
            &nbsp;
            <SortButton></SortButton>
          </Row>
          <br />
          <br />
          <Row>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
          </Row>
          <Row>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
            <Col><Cards></Cards></Col>
          </Row>
          <Row>
            <Col><Cards></Cards></Col>
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

export default SearchPage;
