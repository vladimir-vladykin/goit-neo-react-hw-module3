import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact value={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
