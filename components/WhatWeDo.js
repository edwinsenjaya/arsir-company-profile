import styles from "@/styles/what-we-do.module.css";
import Image from "next/image";
import { useState } from "react";

export default function WhatWeDo() {
  const [whatWeDo, setWhatWeDo] = useState({
    research:
      "Providing consultation for client's needs and wants, collecting project's surrounding environment data.",
    schematic:
      "Creating early design concepts and projecting ideas in a 3D form.",
    drawing:
      "Translating the design into technical drawings for construction purposes.",
    supervise:
      "Monitoring the construction progress and solving problems on site.",
  });

  const whatWeDoContent = [];
  for (let key in whatWeDo) {
    whatWeDoContent.push(
      <section className={styles["image-container"]} key={key}>
        <Image
          src={`/what-we-do/${key}.png`}
          width={150}
          height={150}
          alt={`/what-we-do/${key}.png`}
          className={styles.image}
        />
        <p className={styles.description}>{whatWeDo[key]}</p>
      </section>
    );
  }

  return (
    <section className={styles["what-we-do-container"]}>
      {whatWeDoContent}
    </section>
  );
}
