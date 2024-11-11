import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../../redux/slices/contactsSlice";
import styles from "../FindContact/FindContact.module.css";

export const FindContact = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <div className={styles.findContact}>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Caută un contact..."
      />
    </div>
  );
};
