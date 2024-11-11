import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    addContact: (state, action) => {
      const contactExists = state.contacts.some(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (!contactExists) {
        state.contacts.push({ id: nanoid(), ...action.payload });
      } else {
        alert("Acest contact există deja!");
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;
export default contactsSlice.reducer;
