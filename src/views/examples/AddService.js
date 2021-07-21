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
import { React } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductPageHeader from "components/Headers/ProductPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import RegistryDetails from "../index-sections/ProductDetails.js";

function ProductPage() {
  return (
    <>
      <ProductPageHeader />
      <IndexNavbar />
      <div>
        <Container>
          <Row>
            <Col className="mr-auto" md="10">
              <h1 className="mb-1 text-muted">Service Information</h1>
              <br></br>
            </Col>
            <Container>
              <Row>
                <Col>
                  <RegistryDetails></RegistryDetails>
                </Col>
              </Row>
            </Container>
            &nbsp;
            <hr />
            &nbsp;
            <br />
          </Row>
          <br />
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProductPage;
