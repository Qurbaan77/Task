import React, { useState } from "react";
import { Button } from "react-bootstrap";
import * as Icon from "react-icons/bs";
import "./index.css";

const SearchBox = (props: any) => {
  const [selectAllContacts, setSelectAllContacts] = useState(false);
  const handleChange = (e: any) => {
    props.handleSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <div>
        <div className="searchBox">
          <input
            type="text"
            placeholder=" Search contacts"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="select-all">
          <div>
            <Icon.BsCheckLg
              className={selectAllContacts ? "select" : ""}
              onClick={() => {
                setSelectAllContacts(!selectAllContacts);
                props.selectAllContacts();
              }}
            />
            <label htmlFor="selectAll"> Select All</label>
          </div>
          <div>
            <Button>Export All</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchBox;
