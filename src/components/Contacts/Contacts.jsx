import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/slices/contactsSlice";
import styles from "../Contacts/Contacts.module.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "number") setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["contact-form"]}>
      <input
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
        placeholder="Nume"
      />
      <input
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleChange}
        placeholder="Telefon"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default Contacts;
