import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="logo"
          className={styles.logo}
        />
        <h3 className={styles.logo_title}>Notebook</h3>
      </div>
      <div>
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="logo"
          className={styles.profile_icon}
        />
      </div>
    </div>
  );
};

export default Header;
