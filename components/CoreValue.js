import styles from "@/styles/core-value.module.css";

export default function CoreValue() {
  return (
    <section className={styles["core-value-container"]}>
      <div className={styles["content-container"]}>
        <img
          className={styles["background-image"]}
          src="/images/hero-banner-6.jpeg"
          alt="background-image"
        />
        <h2 className={styles.title}>ARSIR ARCHITECT</h2>
        <p className={styles.paragraph}>
          Arsir comes from an anagram that represents what the company provides
          to each Client. The firm provides consultancy in ARchitectural
          designs, Interior Design, and Real estate advisory. Arsir Architect
          believes that architecture is not all about aesthetics, but
          architecture should be profitable and cost effective.
        </p>
        <a href="/#contact-us" className={styles["contact-us"]}>
          Contact Us
        </a>
      </div>
    </section>
  );
}
