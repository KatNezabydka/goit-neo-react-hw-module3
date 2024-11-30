import Contact from "../Contact/Contact.jsx";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({contacts, onDelete}) => {
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default ContactList;