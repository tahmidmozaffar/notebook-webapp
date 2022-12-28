import Image from "next/image";
import styles from "../styles/Login.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles["container"]}>
      <Image
        src="/logo.png"
        width={100}
        height={100}
        alt="image"
        className={styles["image"]}
      />
      <h1 className={styles["text"]}>Notebook</h1>
      <input
        type="text"
        required
        placeholder="Username"
        className={` ${styles["textinput"]}`}
      />
      <input
        type="password"
        required
        placeholder="Password"
        className={` ${styles["textinput1"]}`}
      />
      <button className={` ${styles["button"]}`}>Login</button>
      <span className={styles["text1"]}>
        Don&apos;t have an account? Signup here.
      </span>
    </div>
  );
}
