import styles from "@/styles/core-value.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CoreValue() {
  return (
    <section className={styles["core-value-container"]}>
      <div className={styles["content-container"]}>
        <Image
          src="/images/arsir-only-logo.png"
          alt="arsir"
          width={700}
          height={184.8}
        />
        <p className={styles.paragraph}>
          Arsir comes from an anagram that represents what the company provides
          to each Client. The firm provides consultancy in ARchitectural
          designs, Interior Design, and Real estate advisory. Arsir Architect
          believes that architecture is not all about aesthetics, but
          architecture should be profitable and cost effective.
        </p>
        <Link href="/contact-us" className={styles["contact-us"]}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
