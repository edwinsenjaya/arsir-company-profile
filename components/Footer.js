import styles from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    document.querySelector("#home").scrollIntoView();
  };

  return (
    <section className={styles["footer-container"]}>
      <section className={styles["info-container"]}>
        <section className={styles["links-container"]}>
          <Link href="/" className={styles.text}>
            Home
          </Link>
          <Link href="/projects" className={styles.text}>
            Projects
          </Link>
          <Link href="/about-us" className={styles.text}>
            About Us
          </Link>
          <Link href="/contact" className={styles.text}>
            Contact
          </Link>
        </section>
        <section className={styles["arsir-logo"]}>
          <div className={styles["scroll-top"]} onClick={scrollToTop}>
            <Image
              src="/images/arsir-architect-grey.png"
              width={200}
              height={200}
              alt="arsir-architect-grey.png"
            />
          </div>
        </section>
        <section className={styles.address}>
          <h6 className={styles.text}>Jl. Sriwijaya No.10</h6>
          <h6 className={styles.text}>Bandung, Jawa Barat</h6>
          <h6 className={styles.text}>Indonesia</h6>
          <h6 className={styles.text}>+62 813 8900 7566</h6>
        </section>
      </section>
      <section className={styles["social-media"]}>
        <Link href="mailto:arsirarchitect@gmail.com" target="_blank">
          <Image
            src="/footer/email-clean.png"
            width={35}
            height={35}
            alt="email.png"
          />
        </Link>
        <Link href="https://www.instagram.com/arsirarchitect/" target="_blank">
          <Image
            src="/footer/instagram-clean.png"
            width={35}
            height={35}
            alt="instagram.png"
          />
        </Link>
        <Link href="https://wa.me/6281389007566" target="_blank">
          <Image
            src="/footer/whatsapp-clean.png"
            width={35}
            height={35}
            alt="whatsapp.png"
          />
        </Link>
      </section>
    </section>
  );
}
