import React from "react";

import { FormGroup, Label, Input, Button, Row } from "reactstrap";

const Forms = () => {
  return (
    <>
      <form>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputEmail4">Service Name</Label>
            <Input type="email" id="inputEmail4" placeholder="Name" />
          </FormGroup>
          <FormGroup className="col-md-12">
            <Label for="exampleText">Short header</Label>
            <Input
              type="text"
              name="text"
              id="exampleText"
              maxLength="200"
              placeholder="Short description"
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
            />
          </FormGroup>
          <FormGroup className="col-md-3">
            <Label for="inputEmail4">Recommended lenght in hours</Label>
            <Input type="number" id="inputEmail4" placeholder="Length" />
          </FormGroup>
          <FormGroup className="col-md-3">
            <Label for="inputPassword4">Cost per hour</Label>
            <Input
              type="number"
              id="inputPassword4"
              placeholder="/$"
              autoComplete="off"
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
              <Input type="text" placeholder="picture header" maxLength="10"/>
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="inputZip">Further Details</Label>
              <Input type="text" placeholder="more information" maxLength="40"/>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup className="col-md-2">
              <Label for="image2">Image 2</Label>
              <Input type="image" id="inputAddress" />
            </FormGroup>
            <FormGroup className="col-md-4">
              <Label for="inputZip">Header 2</Label>
              <Input type="text" placeholder="picture header" maxLength="10"/>
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="inputZip">Further Details</Label>
              <Input type="text" placeholder="more information" maxLength="40"/>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup className="col-md-2">
              <Label for="image3">Image 3</Label>
              <Input type="image" id="inputAddress" />
            </FormGroup>
            <FormGroup className="col-md-4">
              <Label for="inputZip">Header 3</Label>
              <Input type="text" placeholder="picture header" maxLength="10"/>
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="inputZip">Further Details</Label>
              <Input type="text" placeholder="more information" maxLength="40"/>
            </FormGroup>
          </Row>
        </div>
        <hr/>
        <Button type="submit" color="danger" outline>
          Add Service
        </Button>
      </form>
    </>
  );
};

export default Forms;
