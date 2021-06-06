import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <CardLink href="#">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Product title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Product subtitle</CardSubtitle>
        </CardBody>
        <img  alt="..." 
        width="318"
        height="180"
        src={
        require("assets/img/Trial3.jpg")
        .default}
        />
        <CardBody>
          <CardText>Some short reference to describe the item (limit them to certain words cus if not this text will never end.</CardText>
          <CardLink>Average Rating</CardLink>
          <CardLink>Number of times used</CardLink>
        </CardBody>
      </Card>
      </CardLink>
    </div>
  );
};

export default Cards;