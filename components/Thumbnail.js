import styles from "@/styles/thumbnail.module.css";

export default function Thumbnail() {
  const thumbnailImages = [];
  for (let i = 0; i < 13; i++) {
    thumbnailImages.push(
      <div
        key={i}
        className={styles["thumbnail-item"]}
        style={i === 12 ? { marginRight: "0" } : {}}
      >
        <img
          className={styles["thumbnail-image"]}
          src={`/images/thumbnail-${i + 1}.jpg`}
          alt={`thumbnail-${i + 1}`}
        />
      </div>
    );
  }

  return (
    <section className={styles["thumbnail-wrapper"]}>
      <section className={styles["thumbnail-container"]}>
        {thumbnailImages}
      </section>
    </section>
  );
}
