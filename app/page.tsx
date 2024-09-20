import styles from "./page.module.css";
import SenseiHeader from "@/app/com/header/sensei-header";
import SenseiHome from "@/app/com/home/sensei-home";

export default function Home() {
  return (
    <main className={styles.main}>
      <SenseiHeader></SenseiHeader>
        {/*<SenseiHome></SenseiHome>*/}
    </main>
  );
}
