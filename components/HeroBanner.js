import styles from "@/styles/hero-banner.module.css";
import Image from "next/image";

export default function HeroBanner() {
  const carouselIndicators = [];
  const carouselItems = [];
  for (let i = 0; i < 7; i++) {
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

    carouselItems.push(
      <div
        key={i}
        className={i === 0 ? "carousel-item active" : "carousel-item"}
      >
        <div className={styles["carousel-item-container"]}>
          <div className={styles["image-container"]}>
            <img
              src={"/hero-banner/" + (i + 1) + ".jpg"}
              alt={"/hero-banner/" + (i + 1) + ".jpg"}
              className={styles["carousel-image"]}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="home" className="carousel slide" data-bs-ride="true">
      <div className={styles["cover"]}>
        <Image src="/gif/arsir.gif" alt="arsir.gif" width={800} height={800} />
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
