import React from "react";
import Section from "./components/Section/Section";
import Contacts from "./components/Contacts/Contacts";
import ContactsList from "./components/ContactsList/ContactsList";
import { FindContact } from "./components/FindContact/FindContact";

function App() {
  return (
    <>
      <Section title="PhoneBookApp">
        <Contacts />
      </Section>
      <Section title="Find contact by name">
        <FindContact />
      </Section>
      <Section title="Contacts">
        <ContactsList />
      </Section>
    </>
  );
}

export default App;
