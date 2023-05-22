import styles from "@/styles/header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <section className={styles["header-container"]}>
      <section className={styles["content-container"]}>
        <section className={styles["logo-container"]}>
          <Link href="/">
            <Image
              src="/images/arsir-architect-white-1.png"
              height={85}
              width={85}
              alt="logo"
            />
          </Link>
        </section>
        <section className={styles["title-container"]}>
          <section className={styles["title-1"]}>
            <Link className={styles.text} href="/">
              Home
            </Link>
          </section>
          <section className={styles["title-2"]}>
            <Link className={styles.text} href="/projects">
              Projects
            </Link>
          </section>
          <section className={styles["title-3"]}>
            <Link className={styles.text} href="/about-us">
              About Us
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
}
