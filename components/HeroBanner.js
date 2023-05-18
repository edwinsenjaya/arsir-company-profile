import styles from "@/styles/hero-banner.module.css";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className={styles["hero-banner-container"]}>
      <Image
        src="/images/hero-banner-1.jpeg"
        height={680}
        width={1020}
        alt="hero-banner-1"
      />
    </section>
  );
}
