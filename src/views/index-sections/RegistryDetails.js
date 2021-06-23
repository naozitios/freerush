import React from "react";

import { FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Forms = () => {
  return (
    <>
      <form>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputEmail4">First Name</Label>
            <Input type="email" id="inputEmail4" placeholder="First Name" />
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="inputPassword4">Last Name</Label>
            <Input
              type="password"
              id="inputPassword4"
              placeholder="Last Name"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="inputEmail4">Freelance Role</Label>
            <Input type="email" id="inputEmail4" placeholder="Talent" />
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="inputAddress">Address</Label>
          <Input type="text" id="inputAddress" placeholder="Address" />
        </FormGroup>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="inputCity">City</Label>
            <Input type="text" id="inputCity" />
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="inputState">State</Label>
            <Input type="select" name="select" id="inputState">
              <option>Choose...</option>
              <option>...</option>
            </Input>
          </FormGroup>
          <FormGroup className="col-md-2">
            <Label for="inputZip">Postal Code</Label>
            <Input type="text" id="inputZip" />
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
          />
        </FormGroup>
        <Button type="submit" color="default" outline>
          Update Info
        </Button>
        &nbsp; &nbsp;
        <Link to="service-page">
          <Button color="danger" outline="danger">
            Add service
          </Button>
        </Link>
      </form>
    </>
  );
};

export default Forms;
