import styles from "@/styles/about-us.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className={styles["about-us-container"]}>
      <section className={styles["image-container"]}>
        <Image
          src="/about-us/about-us.jpeg"
          alt="about-us.jpeg"
          width={465.13}
          height={620}
          className={styles.image}
        />
      </section>
      <section className={styles["text-container"]}>
        <section className={`${styles["paragraph-container"]} ${styles.top}`}>
          <p className={styles.paragraph}>
            Arsir Architect is a dynamic architectural firm founded by two young
            male architects, who share a common educational background at the
            esteemed Catholic Parahyangan University in Bandung, Indonesia.
          </p>
        </section>
        <section className={styles["paragraph-container"]}>
          <p className={styles.paragraph}>
            Raymond and Vincent&apos;s journey began at Catholic Parahyangan
            University, where our shared vision and enthusiasm for architecture
            brought us together. Throughout our studies, we honed our skills,
            expanding our knowledge of architectural principles, design
            theories, and construction techniques. We embraced the rich cultural
            heritage and diverse architectural landscapes of Bandung, which
            served as an endless source of inspiration for our future
            endeavours.
          </p>
        </section>
        <section className={styles["paragraph-container"]}>
          <p className={styles.paragraph}>
            Throughout our architectural journey, we have had the privilege of
            welcoming another brilliant mind into our team. Valencia is a
            talented female architect who brings her unique perspective,
            creativity, and keen eye for aesthetics that have enriched our
            collective approach to design.
          </p>
        </section>
        <section
          className={styles["paragraph-container"]}
          style={{ paddingBottom: "30px" }}
        >
          <p className={styles.paragraph}>
            As young architects, we constantly seek inspiration and strive for
            growth. We embrace ongoing professional development, staying
            informed about emerging trends, technological advancements, and
            design philosophies. This enables us to infuse our projects with the
            latest innovations and design approaches while maintaining a deep
            respect for timeless architectural principles.
          </p>
        </section>
      </section>
    </section>
  );
}
