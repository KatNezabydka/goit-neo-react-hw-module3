import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

const App = () => {
    const defaultContacts = [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ];
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const storedContacts = localStorage.getItem('contacts');
        if (!storedContacts) {
            localStorage.setItem('contacts', JSON.stringify(defaultContacts));
            setContacts(defaultContacts);
        } else {
            setContacts(JSON.parse(storedContacts));
        }
    }, []);


    useEffect(() => {
        if (contacts.length > 0) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }, [contacts]);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const addContact = (name, number) => {
        const newContact = {id: nanoid(), name, number};
        setContacts((prev) => [...prev, newContact]);

    };

    const deleteContact = (id) => {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact}/>
            <SearchBox filter={filter} setFilter={setFilter}/>
            <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
        </div>
    )
}

export default App
