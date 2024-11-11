import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/slices/contactsSlice";
import styles from "../ContactsList/ContactsList.module.css";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.contactList}>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles["contact-item"]}>
            {contact.name} | {contact.number}
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
