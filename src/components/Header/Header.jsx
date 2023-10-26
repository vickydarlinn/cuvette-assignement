import UserProfile from "../UserProfile/UserProfile";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt="" />
      <UserProfile />
    </header>
  );
};

export default Header;
