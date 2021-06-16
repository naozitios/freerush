import React from 'react';
import {
  Card, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <CardLink href="#">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Magic Class</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Edward Loke</CardSubtitle>
        </CardBody>

        <CardBody>
        <img  alt="..." 
        width="318"
        height="180"
        src={
        require("assets/img/Trial2.jpg")
        .default}
        />
        </CardBody>
      </Card>
      </CardLink>
    </div>
  );
};

export default Cards;