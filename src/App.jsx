import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    // initial state to simplify testing
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleSubmitUserData = (contactData) => {
    const newContact = {
      id: nanoid(),
      ...contactData,
    };

    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = filterContacts(contacts, searchValue.trim());
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitUserData={handleSubmitUserData} />
        <SearchBox
          searchValue={searchValue}
          onUpdate={handleSearchValueChange}
        />
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
        />
      </div>
    </>
  );
}

function filterContacts(contacts, searchValue) {
  if (searchValue === "") return contacts;

  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase());
  });
}

export default App;
