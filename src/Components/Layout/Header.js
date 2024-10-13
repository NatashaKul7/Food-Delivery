import styles from "./header.module.css";
import sushiImage from "../../assets/sushi.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Japanese Food</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Japanese cuisine dishes" />
      </div>
    </>
  );
};

export default Header;
