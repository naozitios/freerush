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

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. ok sures

*/
import React, { useState } from "react";
import firebase from "../../firebase.js";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import { useHistory } from "react-router-dom";

const db = firebase.firestore().collection("users");

function RegisterPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  //adds details to database
  async function addUser(newUser) {
    if (newUser.CPassword !== newUser.Password) {
      return setError("incorrect password");
    }
    try {
      setError("");
      setLoading(true);
      db.add({
        email: newUser.Email,
        password: newUser.Password,
      });
      await firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.Email, newUser.Password);
      history.push("./Setup-page");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/registerpage.jpg").default + ")",
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
                <h3 className="title mx-auto">Register with us</h3>
                {error && <h4>{error}</h4>}
                <Form className="register-form">
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Confirmed Password</label>
                  <Input
                    placeholder="Confirmed Password"
                    type="password"
                    name="CPassword"
                    value={CPassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  />

                  <Button
                    disabled={loading}
                    block
                    className="btn-round"
                    color="danger"
                    type="submit"
                    onClick={() =>
                      addUser({
                        Email,
                        Password,
                        CPassword,
                      })
                    }
                  >
                    Register
                  </Button>
                </Form>
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
