import Image from "next/image";
import styles from "./page.module.css";
import SenseiHeader from "@/app/com/header/sensei-header";

export default function Home() {
  return (
    <main className={styles.main}>
      <SenseiHeader></SenseiHeader>
        <SenseiHeader></SenseiHeader>
    </main>
  );
}
