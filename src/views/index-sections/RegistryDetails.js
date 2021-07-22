import React from "react";
import firebase from "../../firebase.js";
import { FormGroup, Label, Input, Button, Alert } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const db = firebase.firestore().collection("users");
const user= firebase.auth().currentUser;


const Forms = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Role, setRole] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Area, setState] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [Description, setDescription] = useState("");
  const history = useHistory();
  const [error, setError] = useState("");

  function addInfo(newInfo) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        //if it doesnt work consider try catch
        if (FirstName === "") {
          return setError("First Name not filled");
        }
        if (LastName === "") {
          return setError("Last Name not filled");
        }
        if (Role === "" || Address === ""|| City === ""|| Description === "") {
          return setError("Mandatory entries not filled");
        }
        var uid = user.uid;
        db.doc(uid).set(newInfo);
        history.push("./profile-page");
      } else {
        return setError("Please Re-Login to try again");
      }
    });
  }
  

  function addInfoandAddservice(newInfo) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        if (FirstName === "") {
          return setError("First Name not filled");
        }
        if (LastName === "") {
          return setError("Last Name not filled");
        }
        if (Role === "" || Address === ""|| City === ""|| Description === "") {
          return setError("Mandatory entries not filled");
        }
        var uid = user.uid;
        db.doc(uid).set(newInfo);
        history.push("./service-page");
      } 
    });
  }
  

  return (
    <>
      <form>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputEmail4">First Name</Label>
            <Input
              type="text"
              placeholder="First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="inputPassword4">Last Name</Label>
            <Input
              type="text"
              placeholder="Last Name"
              autoComplete="off"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="inputEmail4">Freelance Role</Label>
            <Input
              type="text"
              id="inputEmail4"
              placeholder="Talent"
              value={Role}
              onChange={(e) => setRole(e.target.value)}
            />
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="inputAddress">Address</Label>
          <Input
            type="text"
            id="inputAddress"
            placeholder="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputCity">City</Label>
            <Input
              type="text"
              id="inputCity"
              value={City}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="inputState">Area</Label>
            <Input
              type="select"
              name="select"
              value={Area}
              onChange={(e) => setState(e.target.value)}
            >
              <option>North</option>
              <option>South</option>
              <option>East</option>
              <option>West</option>
              <option>Central</option>
            </Input>
          </FormGroup>
          <FormGroup className="col-md-2">
            <Label for="inputZip">Postal Code</Label>
            <Input
              type="text"
              id="inputZip"
              value={PostalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="exampleText">Short description about yourself</Label>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            maxLength="200"
            placeholder="Tell the world about you"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        {error && <Alert color="danger">{error}</Alert>}
        <Button
          type="submit"
          color="default"
          outline
          onClick={
            //handleUpdate
            () =>
              addInfo({
                FirstName,
                LastName,
                Role,
                Address,
                City,
                Area,
                PostalCode,
                Description,
              })
          }
        >
          Update Info
        </Button>
        &nbsp; &nbsp;
        <Button
          color="danger"
          outline="danger"
          onClick={
            //handleUpdate
            () =>
              addInfoandAddservice({
                FirstName,
                LastName,
                Role,
                Address,
                City,
                Area,
                PostalCode,
                Description,
              })
          }
        >
          Add service
        </Button>
      </form>
    </>
  );
};

export default Forms;
