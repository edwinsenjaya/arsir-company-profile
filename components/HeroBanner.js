import styles from "@/styles/hero-banner.module.css";
import { useEffect, useState } from "react";

export default function HeroBanner() {
  const carouselIndicators = [];
  const carouselItems = [];
  let numberOfImages = 0;

  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    if (window.sessionStorage.getItem("newSession") === null) {
      window.sessionStorage.setItem("newSession", "false");
    } else {
      document.querySelector("#cover").style.display = "none";
    }
    setScreenWidth(window.outerWidth);
  }, []);

  if (screenWidth <= 600) {
    numberOfImages = 6;
  } else {
    numberOfImages = 7;
  }

  for (let i = 0; i < numberOfImages; i++) {
    carouselIndicators.push(
      <button
        key={i}
        type="button"
        data-bs-target="#home"
        data-bs-slide-to={i}
        className={i === 0 ? "active" : ""}
        aria-current={i === 0 ? "true" : ""}
      ></button>
    );

    if (screenWidth <= 600) {
      carouselItems.push(
        <div
          key={i}
          className={i === 0 ? "carousel-item active" : "carousel-item"}
        >
          <div className={styles["carousel-item-container"]}>
            <div className={styles["image-container"]}>
              <img
                src={"/hero-banner/mobile-" + (i + 1) + ".webp"}
                alt={i + 1 + ".webp"}
                className={styles["carousel-image"]}
              />
            </div>
          </div>
        </div>
      );
    } else {
      carouselItems.push(
        <div
          key={i}
          className={i === 0 ? "carousel-item active" : "carousel-item"}
        >
          <div className={styles["carousel-item-container"]}>
            <div className={styles["image-container"]}>
              <img
                src={"/hero-banner/" + (i + 1) + ".webp"}
                alt={i + 1 + ".webp"}
                className={styles["carousel-image"]}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <section id="home" className="carousel slide" data-bs-ride="true">
      <div id="cover" className={styles["cover"]}>
        <video
          width="800"
          height="800"
          autoPlay
          muted
          className={styles["arsir-gif"]}
        >
          <source src="/gif/arsir.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="carousel-indicators">{carouselIndicators}</div>
      <div className="carousel-inner">{carouselItems}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#home"
        data-bs-slide="prev"
        style={{
          background: "linear-gradient(to right, #1b1b1d, transparent)",
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#home"
        data-bs-slide="next"
        style={{
          background: "linear-gradient(to left, #1b1b1d, transparent)",
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
}
