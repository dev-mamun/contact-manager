import React, {useRef} from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log("ContactList:", props);
  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    console.log('renderContactList: ', contact);
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  }
  return (
    <div className="main">
      <div className="add-btn">
        <h2>Contact list</h2>
        <Link to="/add">
          <button className="ui button blue right btnadd"><i className="user small icon"></i> <span>Add</span></button>
        </Link>
      </div>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search....."
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}/>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0 ? renderContactList : "No Contact Found"}
      </div>
    </div>
  );
}

export default ContactList;