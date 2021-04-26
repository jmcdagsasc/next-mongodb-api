import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Soy un
        <span> Header</span>
      </h1>
      <p className={styles.description}>Consultoría especializada</p>
    </div>
  );
};

export default Header;
