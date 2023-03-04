import styles from "./title.module.css";

export default function Title({ name }) {
  return (
    <div className={styles.main_container}>
      <h1>{name}</h1>
    </div>
  );
}
