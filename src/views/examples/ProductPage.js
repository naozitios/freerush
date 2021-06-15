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
  NavItem,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
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

              <Link to="profile-page">
              <Button className="btn-round" color="default" outline>
                <i className="nc-icon nc-badge" />  Profile
              </Button>
              </Link>
            </div>
          </div>
          <Row>           
            <Col className="ml-auto mr-auto text-center" md="10">
            <br></br>
            <h1 className="mb-2 text-muted">Cock Magic for gUy5</h1>
            <h3>The cock magic that all guys like, some like it harder than the rest, but at the end of the day once it goes in the customer is satisfied.</h3>
            <br></br>
            </Col>
            <div>
            <img  
            width="800"
            height="450"
            align="left"
            src={
              require("assets/img/ed-performing.jpg")
              .default}
            />
          <p>Purchase this product now or get in contact with the service provider with a click of a button!</p>
          
          <Link to="profile-page">
              <Button className="btn-round" color="primary" outline="warning">
                <i className="nc-icon nc-badge" />  Chat
              </Button>
          </Link>
          <br>
          </br>
          <Link to="profile-page">
             <Button className="btn-round" color="primary" outline="warning">
               Purchase
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
              <h1>
                Other Works
              </h1>
              <br />
            </Col>
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
          <Link to="profile-page">
              <Button className="btn-round" color="default" outline>
                <i className="nc-icon nc-badge" />  Profile
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
