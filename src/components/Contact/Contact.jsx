import { FaUser as UserIcon } from "react-icons/fa";
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ value: { name, number } }) => {
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
          console.log("Delete");
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
