import React, { useState, useEffect } from "react";
import { Contact } from "../contact";
import Header from "../header/index";
import SearchBox from "../search_bar/index";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "react-query";
import { http, token } from "../../axios/index";

interface IContact {
  name: string;
  phoneNumber: number;
  id: any;
  tags: any;
}

const AppContent = () => {
  const [count, setCount] = useState(50);
  const {
    isLoading,
    data: contacts,
    refetch,
  } = useQuery<any>("tokenKey", async () => {
    return token
      .post("/token", {
        refreshToken: "059c420e-7424-431f-b23b-af0ecabfe7b8",
        teamId: "a001994b-918b-4939-8518-3377732e4e88",
      })
      .then((response) => {
        return http
          .get(`/contacts?count=${count + 50}`, {
            headers: {
              Authorization: "Bearer " + response.data.access_token,
            },
          })
          .then((response) => {
            setCount(count + 50);
            return response.data.contacts;
          })
          .catch((error) => console.log({ error }));
      })
      .catch((error) => console.log(error));
  });

  const [contactsData, setContactsData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedContacts, setSelectedContacts] = useState<any>([]);
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    if (contacts && !isLoading) {
      setContactsData(contacts);
    }
  }, [contacts, isLoading]);

  // handel search method

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  // Method for single contact selection

  const selectContact = (contact: any) => {
    if (selectedContacts.includes(contact)) {
      let newArray = selectedContacts.filter(
        (element: any) => element !== contact
      );
      setSelectedContacts(newArray);
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  // Method for select all contacts

  const selectAllContacts = () => {
    if (allSelected) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts([...contactsData]);
    }
    setAllSelected(!allSelected);
  };

  const fetchMoreData = () => {
    refetch();
  };
  return (
    <React.Fragment>
      <div>
        <Header />
        <SearchBox
          handleSearch={handleSearch}
          selectAllContacts={() => selectAllContacts()}
        />

        <InfiniteScroll
          dataLength={contactsData?.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {contactsData
            ?.filter((contact) => {
              if (
                contact?.name.includes(searchValue) ||
                contact?.phoneNumber.includes(searchValue) ||
                contact?.messagesReceived.includes(searchValue) ||
                contact?.messagesSent.includes(searchValue)
              ) {
                return true;
              }
              return false;
            })
            .map((contact: IContact, index: any) => {
              return (
                <Contact
                  selectContact={(contact: any) => selectContact(contact)}
                  key={index}
                  name={contact?.name}
                  number={contact?.phoneNumber}
                  id={contact}
                  tags={contact?.tags}
                  checkboxState={selectedContacts.includes(contact)}
                />
              );
            })}
        </InfiniteScroll>
      </div>
    </React.Fragment>
  );
};

export default AppContent;
