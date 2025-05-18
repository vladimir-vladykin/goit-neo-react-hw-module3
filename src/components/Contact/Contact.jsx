import { FaUser as UserIcon } from "react-icons/fa";
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ value: { id, name, number }, onDelete }) => {
  return (
    <div className={styles.contact}>
      <ul>
        <li>
          <UserIcon />
          <p>{name}</p>
        </li>
        <li>
          <PhoneIcon />
          <p>{number}</p>
        </li>
      </ul>

      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
