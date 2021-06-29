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
import { Link } from "react-router-dom";

const db = firebase.firestore().collection("users");

//adds details to database
function addUser(newUser) {
  console.log("newUser added")
  if (newUser.CPassword !== newUser.Password) {
    return alert("Password and Confirmed Password do not match.");
    
  } else {
    //db.doc().set(newUser);
    // firebase.auth().createUserWithEmailAndPassword(newUser.Email, newUser.Password)
    newUser.CPassword = newUser.CPassword;
    db.doc(newUser.id).set({
      name: newUser.Username,
      email: newUser.Email,
      password: newUser.Password
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  window.location = "./Setup-page";
  }
}

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");

  

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
                <Form className="register-form">
                  <label>Username</label>
                  <Input
                    placeholder="Username"
                    type="text"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
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
                    name="Password"
                    value={CPassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  />
            
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      type="submit"
                      onClick={() =>
                        addUser({
                          Username,
                          Email,
                          Password,
                          CPassword
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
