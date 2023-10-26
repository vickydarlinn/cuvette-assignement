import styles from "./MenuBar.module.css";
import { SiGoogleanalytics } from "react-icons/si";
import { FiAward } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";

const MenuBar = () => {
  return (
    <nav className={styles.container}>
      <a href="#" className={styles.menu_item}>
        <span>
          <SiGoogleanalytics />
        </span>
        <span>Dashboard</span>
      </a>
      <a href="#" className={`${styles.menu_item} ${styles.active} `}>
        <span>
          <FiAward />
        </span>
        <span>Skill Test</span>
      </a>
      <a href="#" className={styles.menu_item}>
        <span>
          <IoDocumentOutline />
        </span>
        <span>Internships</span>
      </a>
    </nav>
  );
};

export default MenuBar;
