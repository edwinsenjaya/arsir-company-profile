import styles from "@/styles/hero-banner.module.css";

export default function HeroBanner() {
  return (
    <section
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className={styles["carousel-item-container"]}>
            <div className={styles["image-container"]}>
              <div className={styles["fade-cover-right"]}></div>
              <div className={styles["fade-cover-left"]}></div>
              <img
                src="/images/hero-banner-1.jpeg"
                alt="hero-banner-1.jpeg"
                className={styles["carousel-image"]}
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Project Name</h5>
              <p>Some representative placeholder content for the project.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className={styles["carousel-item-container"]}>
            <div className={styles["image-container"]}>
              <div className={styles["fade-cover-right"]}></div>
              <div className={styles["fade-cover-left"]}></div>
              <img
                src="/images/hero-banner-2.jpeg"
                alt="hero-banner-2.jpeg"
                className={styles["carousel-image"]}
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Project Name</h5>
              <p>Some representative placeholder content for the project.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className={styles["carousel-item-container"]}>
            <div className={styles["image-container"]}>
              <div className={styles["fade-cover-right"]}></div>
              <div className={styles["fade-cover-left"]}></div>
              <img
                src="/images/hero-banner-3.jpeg"
                alt="hero-banner-3.jpeg"
                className={styles["carousel-image"]}
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Project Name</h5>
              <p>Some representative placeholder content for the project.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className={styles["carousel-item-container"]}>
            <div className={styles["image-container"]}>
              <div className={styles["fade-cover-right"]}></div>
              <div className={styles["fade-cover-left"]}></div>
              <img
                src="/images/hero-banner-4.jpeg"
                alt="hero-banner-4.jpeg"
                className={styles["carousel-image"]}
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Project Name</h5>
              <p>Some representative placeholder content for the project.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className={styles["carousel-item-container"]}>
            <div className={styles["image-container"]}>
              <div className={styles["fade-cover-right"]}></div>
              <div className={styles["fade-cover-left"]}></div>
              <img
                src="/images/hero-banner-5.jpeg"
                alt="hero-banner-5.jpeg"
                className={styles["carousel-image"]}
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Project Name</h5>
              <p>Some representative placeholder content for the project.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className={styles["carousel-item-container"]}>
            <div className={styles["image-container"]}>
              <div className={styles["fade-cover-right"]}></div>
              <div className={styles["fade-cover-left"]}></div>
              <img
                src="/images/hero-banner-6.jpeg"
                alt="hero-banner-6.jpeg"
                className={styles["carousel-image"]}
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Project Name</h5>
              <p>Some representative placeholder content for the project.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className={styles["carousel-item-container"]}>
            <div className={styles["image-container"]}>
              <div className={styles["fade-cover-right"]}></div>
              <div className={styles["fade-cover-left"]}></div>
              <img
                src="/images/hero-banner-7.jpeg"
                alt="hero-banner-7.jpeg"
                className={styles["carousel-image"]}
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Project Name</h5>
              <p>Some representative placeholder content for the project.</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        // style={{
        //   background: "linear-gradient(to right, black, black, transparent)",
        // }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        // style={{
        //   background: "linear-gradient(to left, black, black, transparent)",
        // }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
}
