import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./header.module.css";

const Header = () => {
  const router = useRouter();
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
        <span className={styles.name}>User name</span>
        <span className={styles.logout} onClick={() => router.replace("/")}>
          {"( Logout )"}
        </span>
      </div>
    </div>
  );
};

export default Header;
