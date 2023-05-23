import styles from "@/styles/thumbnail.module.css";

export default function Thumbnail() {
  const thumbnailImages = [];
  for (let i = 0; i < 3; i++) {
    thumbnailImages.push(
      <div className={styles["thumbnail-item"]}>
        <img
          className={styles["thumbnail-image"]}
          src={`/images/thumbnail-${i + 1}.jpg`}
          alt={`thumbnail-${i + 1}`}
        />
      </div>
    );
  }

  return (
    <section className={styles["thumbnail-container"]}>
      {thumbnailImages}
    </section>
  );
}
