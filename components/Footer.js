import styles from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className={styles["footer-container"]}>
      <section className={styles["social-media"]}>
        <Link href="mailto:arsirarchitect@gmail.com" target="_blank">
          <Image
            src="/footer/email.png"
            width={55}
            height={55}
            alt="email.png"
          />
        </Link>
        <Link href="https://www.instagram.com/arsirarchitect/" target="_blank">
          <Image
            src="/footer/instagram.png"
            width={55}
            height={55}
            alt="instagram.png"
          />
        </Link>
        <Link href="https://wa.me/6281389007566" target="_blank">
          <Image
            src="/footer/whatsapp.png"
            width={55}
            height={55}
            alt="whatsapp.png"
          />
        </Link>
      </section>
      <section>
        <Image
          src="/images/arsir-architect-white.png"
          height={30}
          width={148.38}
          alt="email.png"
        />
      </section>
    </section>
  );
}
