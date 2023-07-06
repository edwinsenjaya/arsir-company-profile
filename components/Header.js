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
    const closeButton = document.querySelector("#close-button");

    if (router.pathname === "/") {
      header.addEventListener("mouseover", () => {
        header.style.background = "#1b1b1d";
      });
      header.addEventListener("mouseleave", () => {
        header.style.background = transparent;
      });
      window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        if (
          currentScrollPos > window.innerHeight ||
          closeButton.style.display === "block"
        ) {
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

  const openDropDown = (e) => {
    e.preventDefault();

    const dropdown = document.querySelector("#dropdown-container");
    const listButton = document.querySelector("#list-button");
    const closeButton = document.querySelector("#close-button");

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "flex";
      listButton.style.display = "none";
      closeButton.style.display = "block";
    } else if (dropdown.style.display !== "none") {
      dropdown.style.display = "none";
      listButton.style.display = "block";
      closeButton.style.display = "none";
    }
  };

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
              className={styles["arsir-logo"]}
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
        <section className={styles["dropdown-button"]}>
          <button className={styles.button} onClick={openDropDown}>
            <Image
              src="/images/list.png"
              alt="list.png"
              height={30}
              width={30}
              className={styles["list-button"]}
              id="list-button"
            />
            <Image
              src="/images/close.png"
              alt="close.png"
              height={20}
              width={20}
              className={styles["close-button"]}
              id="close-button"
            />
          </button>
        </section>
      </section>
      <section className={styles["dropdown-container"]} id="dropdown-container">
        <section className={styles["dropdown-option"]}>
          <Link className={styles.text} href="/">
            Home
          </Link>
        </section>
        <section className={styles["dropdown-option"]}>
          <Link className={styles.text} href="/projects">
            Projects
          </Link>
        </section>
        <section className={styles["dropdown-option"]}>
          <Link className={styles.text} href="/about-us">
            About Us
          </Link>
        </section>
      </section>
    </section>
  );
}
