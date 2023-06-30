import styles from "@/styles/header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const transparent =
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))";

  useEffect(() => {
    const header = document.getElementById("header");

    if (router.pathname === "/") {
      header.addEventListener("mouseover", () => {
        header.style.background = "#1b1b1d";
      });
      header.addEventListener("mouseleave", () => {
        header.style.background = transparent;
      });
      window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > window.innerHeight) {
          header.style.background = "#1b1b1d";
          header.addEventListener("mouseleave", () => {
            header.style.background = "#1b1b1d";
          });
        } else {
          header.style.background = transparent;
          header.addEventListener("mouseleave", () => {
            header.style.background = transparent;
          });
        }
      };
    }
  });

  return (
    <section className={styles["header-container"]}>
      <section
        style={
          router.pathname !== "/"
            ? { background: "#1b1b1d" }
            : { background: transparent }
        }
        id="header"
        className={styles["content-container"]}
      >
        <section className={styles["logo-container"]}>
          <Link href="/">
            <Image
              src="/images/arsir-architect-white.png"
              height={30}
              width={148.38}
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
            <Link
              className={styles.text}
              style={{ display: "block", width: "68px" }}
              href="/about-us"
            >
              About Us
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
}
