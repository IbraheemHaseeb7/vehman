import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./SideBar.module.css";

export default function SideBar() {
  const router = useRouter();
  return (
    <div className={styles.main_container}>
      <p>Navigation Menu</p>
      <button
        className={`${styles.left_btns} ${styles.home}`}
        onClick={() => {
          router.push("/home");
        }}
      >
        Home
      </button>
      <button
        className={`${styles.left_btns} ${styles.add}`}
        onClick={() => {
          router.push("/add");
        }}
      >
        Add new Vehicles
      </button>
      <button
        className={`${styles.left_btns} ${styles.add}`}
        onClick={() => {
          router.push("/manage");
        }}
      >
        Manage Vehicles
      </button>
      <button
        className={`${styles.left_btns} ${styles.record}`}
        onClick={() => {
          router.push("/records");
        }}
      >
        Records
      </button>
      <button
        className={`${styles.left_btns} ${styles.unpaid}`}
        onClick={() => {
          router.push("/unpaid");
        }}
      >
        Random Notes
      </button>
      <button
        className={`${styles.left_btns} ${styles.unpaid}`}
        onClick={() => {
          router.push("/side");
        }}
      >
        Side Purchase
      </button>
    </div>
  );
}
