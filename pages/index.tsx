import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import authService from "../src/services/auth.service";
import styles from "../styles/common.module.css";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let formObj: any = {};
    for (const [key, value] of Array.from(formData.entries())) {
      if (["username", "password"].includes(key)) {
        formObj[key] = value.toString();
      }
    }

    try {
      const response = await authService.login(
        formObj["username"],
        formObj["password"]
      );

      if (response) {
        localStorage.setItem("token", response.token);
        router.replace("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          name="username"
          required
          placeholder="Username"
          className={styles.textinput}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          className={styles.textinput1}
        />
        <button className={` ${styles.button}`} type="submit">
          Login
        </button>
      </form>
      <Link href="/signup" className={styles.text1}>
        <span>Don&apos;t have an account? Signup here.</span>
      </Link>
    </div>
  );
}
