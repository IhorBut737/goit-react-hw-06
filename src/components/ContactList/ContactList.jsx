import React from "react";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const searchFilter = useSelector((state) => state.filters.name);

  const searchContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <ul>
      {searchContact.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
