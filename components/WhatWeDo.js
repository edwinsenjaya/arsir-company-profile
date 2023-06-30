import styles from "@/styles/what-we-do.module.css";
import Image from "next/image";
import { useState } from "react";

export default function WhatWeDo() {
  const [whatWeDo, setWhatWeDo] = useState({
    research:
      "Providing consultation for client's needs and wants, collecting project's surrounding environment data",
    schematic:
      "Creating early design concepts and projecting ideas in a 3D form",
    drawing:
      "Translating the design into technical drawings for construction purposes",
    supervise:
      "Monitoring the construction progress and solving problems on site",
  });

  function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1);
  }

  const whatWeDoContent = [];
  for (let key in whatWeDo) {
    whatWeDoContent.push(
      <section className={styles["content-container"]} key={key}>
        <Image
          src={`/what-we-do-grey/${key}.png`}
          width={150}
          height={150}
          alt={`${key}.png`}
          className={styles.image}
        />
        <h3 className={styles.title}>{capitalize(key)}</h3>
        <p className={styles.description}>{whatWeDo[key]}</p>
      </section>
    );
  }

  return (
    <>
      <h3 className={styles["what-we-do-title"]}>What We Do</h3>
      <section className={styles["what-we-do-container"]}>
        {whatWeDoContent}
      </section>
    </>
  );
}
