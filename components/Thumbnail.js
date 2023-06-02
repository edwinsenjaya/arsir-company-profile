import styles from "@/styles/thumbnail.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Thumbnail() {
  const [projectsData, setProjectsData] = useState([
    {
      name: "KS House",
      type: "Residential",
      year: "2023",
      location: "Kavling DKI, West Jakarta",
      area: "175 m2",
      scope: "Exterior",
    },
    {
      name: "SA House",
      type: "Residential",
      year: "2023",
      location: "Alam Sutera, South Tangerang",
      area: "410 m2",
      scope: "Exterior",
    },
    {
      name: "MV House",
      type: "Residential",
      year: "2020",
      location: "PIK, North Jakarta",
      area: "580 m2",
      scope: "Exterior",
    },
    {
      name: "ST House",
      type: "Residential",
      year: "Pending",
      location: "Kopo Bandung",
      area: "185 m2",
      scope: "Exterior & Interior",
    },
    {
      name: "TC House",
      type: "Residential",
      year: "2021",
      location: "Citraland, Makassar",
      area: "240 m2",
      scope: "Interior",
    },
    {
      name: "AW House",
      type: "Residential",
      year: "2020",
      location: "Westhoff, Bandung",
      area: "570 m2",
      scope: "Facade",
    },
    {
      name: "CC House",
      type: "Residential",
      year: "2022",
      location: "Taman Kopo, Bandung",
      area: "130 m2",
      scope: "Design & Build",
    },
    {
      name: "AR Rooftop",
      type: "Residential",
      year: "2022",
      location: "Tebet, South Jakarta",
      area: "155 m2",
      scope: "Interior",
    },
    {
      name: "GB Apartment",
      type: "Residential",
      year: "2019",
      location: "Bintaro, South Tangerang",
      area: "21.5 ~ 45.6 m2",
      scope: "Interior",
    },
    {
      name: "CL House",
      type: "Residential",
      year: "2019",
      location: "Holis, Bandung",
      area: "220 m2",
      scope: "Exterior & Interior",
    },
    {
      name: "YB House",
      type: "Residential",
      year: "2020",
      location: "Bone, South Sulawesi",
      area: "42 m2",
      scope: "Interior",
    },
    {
      name: "JH House",
      type: "Residential",
      year: "2023",
      location: "Tanjung Duren, West Jakarta",
      area: "275 m2",
      scope: "Exterior",
    },
    {
      name: "JN Resort",
      type: "Resort",
      year: "2023",
      location: "Nusa Penida",
      area: "800 m2",
      scope: "Exterior & Interior",
    },
  ]);

  const randomOrder = [];
  for (let i = 0; i < 13; i++) {
    let randomNumber = Math.floor(Math.random() * 13);
    while (randomOrder.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 13);
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
            src={`/images/thumbnail-${randomOrder[i]}.jpg`}
            alt={`thumbnail-${randomOrder[i]}`}
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
