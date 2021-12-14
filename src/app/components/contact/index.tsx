import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import * as Icon from "react-icons/bs";
import Avatar from "react-avatar";
import "./index.css";

export const Contact = ({
  name,
  number,
  selectContact,
  id,
  checkboxState,
  tags,
}: {
  name?: string;
  number?: string | number;
  selectContact: any;
  id: any;
  checkboxState: boolean;
  tags: any;
}) => {
  const [selectedTag, setSelectedTag] = useState("Tags");
  return (
    <React.Fragment>
      <div className="contact-wrapper">
        <div className="contact-information-wrapper">
          <div className="contact-checkbox">
            <Button
              className={!checkboxState ? "select-btn" : "select"}
              onClick={() => {
                selectContact(id);
              }}
            >
              <Icon.BsCheckLg />
            </Button>
          </div>
          <div className="profile">
            <div className="avatar-wrapper">
              <Avatar name={name} size="40" round={true} />
            </div>
            <div className="profile-title">
              <h5>{name}</h5>
              <p>{number}</p>
            </div>
          </div>
        </div>
        <div>
          {tags?.length ? (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedTag}
              </Dropdown.Toggle>
              {tags.map((tag: any, index: any) => {
                return (
                  <Dropdown.Menu key={index}>
                    <Dropdown.Item onClick={() => setSelectedTag(tag?.name)}>
                      {tag?.name}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                );
              })}
            </Dropdown>
          ) : (
            ""
          )}
          <Button className="plus-btn">+</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

// export default Contact;
