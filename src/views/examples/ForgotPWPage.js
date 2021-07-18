/*!
this is the page

https://demos.creative-tim.com/paper-kit-react/#/register-page?ref=pkr-github-readme

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
import React, { useState } from "react";
import firebase from "../../firebase.js";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import { useHistory } from "react-router-dom";

function RegisterPage() {
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("login-page");
    return function cleanup() {
      document.body.classList.remove("login-page");
    };
  });

  async function handleSubmit(newUser) {
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await firebase.auth.sendPasswordResetEmail(newUser.Email)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  function goTo() {
    history.push("./login-page")
  }

  return (
    <>
      <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/noah_login.JPG").default + ")",
        }}
      >
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Password Reset</h3>
                {error && <h4>{error}</h4>}
                {message && <h4>{message}</h4>}
                <Form className="register-form">
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    disabled={loading}
                    onClick={() => handleSubmit({ Email })}
                  >
                    Reset password 
                  </Button>
                </Form>
                <div className="forgot">
                  <Button className="btn-link" color="danger" href="#pablo" onClick={() => goTo()}>
                    Login
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>© {new Date().getFullYear()}, edward and noah 🚢</h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
