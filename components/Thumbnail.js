import styles from "@/styles/thumbnail.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Thumbnail() {
  const [projectsData, setProjectsData] = useState([
    {
      name: "KS House",
      location: "Kavling DKI, West Jakarta",
    },
    {
      name: "SA House",
      location: "Alam Sutera, South Tangerang",
    },
    {
      name: "TC House",
      location: "Citraland, Makassar",
    },
    {
      name: "AW House",
      location: "Westhoff, Bandung",
    },
    {
      name: "CC House",
      location: "Taman Kopo, Bandung",
    },
    {
      name: "GB Apartment",
      location: "Bintaro, South Tangerang",
    },
    {
      name: "YB House",
      location: "Bone, South Sulawesi",
    },
    {
      name: "JH House",
      location: "Tanjung Duren, West Jakarta",
    },
    {
      name: "JN Resort",
      location: "Nusa Penida",
    },
    {
      name: "DJ House",
      location: "Penyaringan, Bali",
    },
    {
      name: "SV House",
      location: "BSD, South Tangerang",
    },
    {
      name: "OJ House",
      location: "Daan Mogot, West Jakarta",
    },
  ]);

  const randomOrder = [];
  for (let i = 0; i < projectsData.length; i++) {
    let randomNumber = Math.floor(Math.random() * projectsData.length);
    while (randomOrder.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * projectsData.length);
    }
    randomOrder.push(randomNumber);
  }

  function formatProjectName(name) {
    return name.replace(" ", "_");
  }

  const thumbnailImages = [];
  for (let i = 0; i < randomOrder.length; i++) {
    thumbnailImages.push(
      <Link
        key={i}
        href={`/project/${formatProjectName(
          projectsData[randomOrder[i]].name
        )}`}
        className={styles["content-wrapper"]}
        style={i === 12 ? { marginRight: "0" } : { marginRight: "15px" }}
      >
        <div className={styles["thumbnail-item"]}>
          <img
            className={styles["thumbnail-image"]}
            src={`/thumbnail/${formatProjectName(
              projectsData[randomOrder[i]].name
            )}.jpg`}
            alt={`${formatProjectName(projectsData[randomOrder[i]].name)}`}
          />
          <div className={styles["thumbnail-text"]}>
            {projectsData[randomOrder[i]].name}
          </div>
          <div className={styles["thumbnail-text"]}>
            {projectsData[randomOrder[i]].location}
          </div>
          <div className={styles["thumbnail-cover"]}></div>
        </div>
      </Link>
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
