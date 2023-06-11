import styles from "@/styles/project-banner.module.css";
import { useRouter } from "next/router";

export default function ProjectBanner() {
  const projectsData = JSON.parse(localStorage.getItem("projectsData"));

  const router = useRouter();
  let projectName = router.query.name;

  const project = projectsData.find((el) => {
    return el.name === projectName?.replace("_", " ");
  });

  const carouselIndicators = [];
  const carouselItems = [];
  for (let i = 0; i < project?.numberOfImages; i++) {
    carouselIndicators.push(
      <button
        key={i}
        type="button"
        data-bs-target="#carouselProjectBanner"
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
              src={`/project/` + projectName + `/${i + 1}.jpg`}
              alt={`/project/` + projectName + `/${i + 1}.jpg`}
              className={styles["carousel-image"]}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="carouselProjectBanner"
      className="carousel slide"
      data-bs-ride="true"
      style={{ background: "#f2f2f2" }}
    >
      <div className="carousel-indicators">{carouselIndicators}</div>
      <div className="carousel-inner">{carouselItems}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselProjectBanner"
        data-bs-slide="prev"
        style={{
          filter: "brightness(0%)",
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselProjectBanner"
        data-bs-slide="next"
        style={{
          filter: "brightness(0%)",
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
}
