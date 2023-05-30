import styles from "@/styles/thumbnail.module.css";

export default function Thumbnail() {
  const randomOrder = [];
  for (let i = 0; i < 13; i++) {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomOrder.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 13) + 1;
    }
    randomOrder.push(randomNumber);
  }

  const thumbnailImages = [];
  for (let i = 0; i < randomOrder.length; i++) {
    thumbnailImages.push(
      <div
        key={i}
        className={styles["thumbnail-item"]}
        style={i === 12 ? { marginRight: "0" } : {}}
      >
        <img
          className={styles["thumbnail-image"]}
          src={`/images/thumbnail-${randomOrder[i]}.jpg`}
          alt={`thumbnail-${randomOrder[i]}`}
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
