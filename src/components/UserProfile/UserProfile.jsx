import profile_pic from "../../assets/profile_pic.jpg";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.profile_image}
        src={profile_pic}
        alt="a profile pic of user"
      />
      <span>Siddharth Jain </span>
    </div>
  );
};

export default UserProfile;
