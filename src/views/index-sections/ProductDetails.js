import { React, useState } from "react";
import firebase from "../../firebase.js";
import { useHistory } from "react-router-dom";
import { FormGroup, Label, Input, Button, Row } from "reactstrap";

const db = firebase.firestore().collection("users");
const user = firebase.auth().currentUser;

const Forms = () => {
  const [ServiceName, setServiceName] = useState("");
  const [ShortHeader, setHeader] = useState("");
  const [Descriptions, setDescriptions] = useState("");
  const [Hours, setHours] = useState("");
  const [CostPerHr, setCost] = useState("");
  const [Header1, setHeader1] = useState("");
  const [Header2, setHeader2] = useState("");
  const [Header3, setHeader3] = useState("");
  const [Details1, setDetails1] = useState("");
  const [Details2, setDetails2] = useState("");
  const [Details3, setDetails3] = useState("");
  const history = useHistory();

  function addInfo(newInfo) {
    db.doc(user.uid).collection("services").doc(newInfo);
    history.push("./profile-page");
  }

  return (
    <>
      <form>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputEmail4">Service Name</Label>
            <Input
              type="test"
              id="inputEmail4"
              placeholder="Name"
              value={ServiceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-md-12">
            <Label for="exampleText">Short header</Label>
            <Input
              type="text"
              name="text"
              id="exampleText"
              maxLength="200"
              placeholder="Short description"
              value={ShortHeader}
              onChange={(e) => setHeader(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-md-12">
            <Label for="exampleText">Description</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              maxLength="2000"
              placeholder="What is it about?"
              value={Descriptions}
              onChange={(e) => setDescriptions(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-md-3">
            <Label for="inputEmail4">Recommended lenght in hours</Label>
            <Input
              type="number"
              id="inputEmail4"
              placeholder="Length"
              value={Hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="col-md-3">
            <Label for="inputPassword4">Cost per hour</Label>
            <Input
              type="number"
              id="inputPassword4"
              placeholder="/$"
              autoComplete="off"
              value={CostPerHr}
              onChange={(e) => setCost(e.target.value)}
            />
          </FormGroup>
        </div>
        <div>
          <Row>
            <FormGroup className="col-md-2">
              <Label for="image1">Image 1</Label>
              <Input type="image" id="inputAddress" />
            </FormGroup>
            <FormGroup className="col-md-4">
              <Label for="inputZip">Header 1</Label>
              <Input
                type="text"
                placeholder="picture header"
                maxLength="10"
                value={Header1}
                onChange={(e) => setHeader1(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="inputZip">Further Details</Label>
              <Input
                type="text"
                placeholder="more information"
                maxLength="40"
                value={Details1}
                onChange={(e) => setDetails1(e.target.value)}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup className="col-md-2">
              <Label for="image2">Image 2</Label>
              <Input type="image" id="inputAddress" />
            </FormGroup>
            <FormGroup className="col-md-4">
              <Label for="inputZip">Header 2</Label>
              <Input
                type="text"
                placeholder="picture header"
                maxLength="10"
                value={Header2}
                onChange={(e) => setHeader2(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="inputZip">Further Details</Label>
              <Input
                type="text"
                placeholder="more information"
                maxLength="40"
                value={Details2}
                onChange={(e) => setDetails2(e.target.value)}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup className="col-md-2">
              <Label for="image3">Image 3</Label>
              <Input type="image" id="inputAddress" />
            </FormGroup>
            <FormGroup className="col-md-4">
              <Label for="inputZip">Header 3</Label>
              <Input
                type="text"
                placeholder="picture header"
                maxLength="10"
                value={Header3}
                onChange={(e) => setHeader3(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="inputZip">Further Details</Label>
              <Input
                type="text"
                placeholder="more information"
                maxLength="40"
                value={Details3}
                onChange={(e) => setDetails3(e.target.value)}
              />
            </FormGroup>
          </Row>
        </div>
        <hr />
        <Button type="submit" color="danger" outline           onClick={
            //handleUpdate
            () =>
              addInfo({
                ServiceName,
                ShortHeader,
                Descriptions,
                Hours,
                CostPerHr,
                Header1,
                Header2,
                Header3,
                Details1,
                Details2,
                Details3
              })
          }>
          Add Service
        </Button>
      </form>
    </>
  );
};

export default Forms;