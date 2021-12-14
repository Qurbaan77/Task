import React from "react";
import { Button } from "react-bootstrap";
import { useContacts } from "../../hooks/index";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-wrapper">
        <div>
          <h2>All Contacts ({useContacts().contacts?.length})</h2>
        </div>
        <div>
          <Button className="plus-btn">+</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
