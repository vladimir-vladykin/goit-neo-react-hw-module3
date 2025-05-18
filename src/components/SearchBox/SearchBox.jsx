import styles from "./SearchBox.module.css";

const SearchBox = ({ searchValue, onUpdate }) => {
  return (
    <div className={styles.search}>
      <p>Find contacts by name</p>
      <input type="text" value={searchValue} onChange={onUpdate} />
    </div>
  );
};

export default SearchBox;
