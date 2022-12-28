import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/common.module.css";

export default function Home() {
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
        placeholder="Username"
        className={styles.textinput}
      />
      <input
        type="password"
        required
        placeholder="Password"
        className={styles.textinput1}
      />
      <button
        className={` ${styles.button}`}
        onClick={() => router.replace("/dashboard")}
      >
        Login
      </button>
      <Link href="/signup" className={styles.text1}>
        <span>Don&apos;t have an account? Signup here.</span>
      </Link>
    </div>
  );
}
