import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

function Example(){
  return (
    <>
      <UncontrolledDropdown>
        <ButtonGroup>
          <Button className="btn-round" color="default" outline>
            <i className="nc-icon nc-atom" /> Sort
          </Button>
          <DropdownToggle
            aria-expanded={false}
            aria-haspopup={true}
            caret
            className="btn-round"
            color="default"
            data-toggle="dropdown"
            type="button"
            outline
          >
            <span className="sr-only">Toggle Dropdown</span>
          </DropdownToggle>
        </ButtonGroup>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            By price
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            By name
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            By relevance
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

export default Example;