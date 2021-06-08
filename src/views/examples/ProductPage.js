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
  Label,
  FormGroup,
  Input,
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
import ProductPageHeader from "components/Headers/ProductPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

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
      <IndexNavbar />
      <ProductPageHeader />
      <div className="section Product-content">
      
        <Container>
          <div className="space"> 
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Take a look at the different services our various artists and creatives have to offer. With the myriad of options that available, don't hesitate to drop them a message to ask them for a quote!
              </p>
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Filters
              </Button>
            </Col>
          </Row>
          <br />
          
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProductPage;
