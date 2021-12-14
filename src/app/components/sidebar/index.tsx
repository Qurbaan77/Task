import React from "react";
import { Badge, Button } from "react-bootstrap";
import * as Icon from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useContacts } from "../../hooks/index";

import "./index.css";
const AppSideBar = () => {
  return (
    <React.Fragment>
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <div className="brandName">
            <Icon.BsTextRight />
            <h3>Audience</h3>
          </div>
          <div>
            <p>{useContacts().contacts?.length} Contacts</p>
          </div>
        </div>
        <div className="include-tags">
          <h4>Includes Tags:</h4>
          <div>
            <Badge bg="light" text="dark">
              Greeting
            </Badge>
            <Badge bg="light" text="dark">
              Greeting <Icon.BsCheckLg />
            </Badge>
            <Badge bg="light" text="dark">
              Greeting
            </Badge>
            <Badge bg="light" text="dark">
              Greeting{" "}
              <span>
                <AiFillDelete className="del-icon" />
                <Icon.BsCheckLg />
              </span>
            </Badge>
          </div>
        </div>
        <div className="Exclude-tags">
          <h4>Excludes Tags:</h4>
          <div>
            <Badge bg="light" text="dark">
              Greeting
            </Badge>
            <Badge bg="light" text="dark">
              Greeting <Icon.BsCheckLg />
            </Badge>
            <Badge bg="light" text="dark">
              Greeting
            </Badge>
            <Badge bg="light" text="dark">
              Greeting <Icon.BsCheckLg />
            </Badge>
          </div>
        </div>
        <div>
          <h4>Message Sent:</h4>
          <div className="message">
            <Badge bg="light" text="dark">
              MIN
            </Badge>
            <Badge bg="light" text="dark">
              MAX
            </Badge>
          </div>
        </div>
        <div>
          <h4>Message Received:</h4>
          <div className="message">
            <Badge bg="light" text="dark">
              MIN
            </Badge>
            <Badge bg="light" text="dark">
              MAX
            </Badge>
          </div>
        </div>
        <Button size="lg">Save Filters</Button>
      </div>
    </React.Fragment>
  );
};

export default AppSideBar;
