import styles from "@/styles/core-value.module.css";
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
          className={styles["logo-image"]}
        />
        <p className={styles.paragraph}>
          Arsir comes from an anagram that represents what the company provides
          to each Client. The firm provides consultancy in Architectural
          designs, Interior Design, and Real estate advisory. Arsir also
          embodies our purpose to draw and transform the vision into reality.
          Our canvas is space - embracing simplicity, minimalism, and modern
          aesthetics.
        </p>
      </div>
    </section>
  );
}
