import React from 'react';
import { InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';

const Example = (props) => {
  return (
    <InputGroup size="default">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>🔎</InputGroupText>
      </InputGroupAddon>
      <Input type="text" placeholder="Search" />
    </InputGroup>
  );
};

export default Example;