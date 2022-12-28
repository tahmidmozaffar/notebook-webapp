import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/common.module.css";

const Signup = () => {
  const router = useRouter();

  return (
    <div className={styles["container"]}>
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="image"
        className={styles.image}
      />
      <h1 className={styles.text}>Notebook</h1>
      <input
        type="text"
        required
        placeholder="Full Name"
        className={` ${styles.textinput}`}
      />
      <input
        type="text"
        required
        placeholder="Username"
        className={` ${styles.textinput}`}
      />
      <input
        type="email"
        required
        placeholder="Email"
        className={` ${styles.textinput}`}
      />
      <input
        type="password"
        required
        placeholder="Password"
        className={` ${styles.textinput1}`}
      />
      <input
        type="password"
        required
        placeholder="Confirm Password"
        className={` ${styles.textinput1}`}
      />
      <button className={` ${styles.button}`}>Login</button>
      <Link
        href=""
        className={styles.text1}
        onClick={() => {
          router.back();
        }}
      >
        <span>Already have an account? Login here.</span>
      </Link>
    </div>
  );
};

export default Signup;
