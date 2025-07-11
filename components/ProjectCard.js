import styles from "@/styles/project-card.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard() {
  const [projects, setProjects] = useState([
    {
      name: "LV Coliving",
      type: "Coliving",
      year: "2025",
      location: "Bandung, West Java",
      area: "225 m",
      scope: "Exterior & Interior",
      numberOfImages: 1,
    },
    {
      name: "PK Townhouse",
      type: "Townhouse",
      year: "2025",
      location: "Cirebon, West Java",
      area: "1800 m",
      scope: "Masterplan & Exterior",
      numberOfImages: 1,
    },
    {
      name: "FK Coliving",
      type: "Coliving",
      year: "2024",
      location: "Yogyakarta, DIY",
      area: "200 m",
      scope: "Exterior & Interior",
      numberOfImages: 1,
      hideOnDesktop: true,
      hideOnMobile: true,
    },
    {
      name: "AT House",
      type: "Residential",
      year: "2024",
      location: "Subang, West Java",
      area: "250 m",
      scope: "Exterior & Interior",
      numberOfImages: 0,
    },
    {
      name: "WS House",
      type: "Residential",
      year: "2024",
      location: "Taman Kopo Indah, Bandung",
      area: "150 m",
      scope: "Exterior",
      numberOfImages: 0,
    },
    {
      name: "NJ House",
      type: "Residential",
      year: "2023",
      location: "Nusa Dua, Bali",
      area: "225 m",
      scope: "Exterior",
      numberOfImages: 1,
    },
    {
      name: "RT Townhouse",
      type: "Townhouse",
      year: "2023",
      location: "Setraduta, Bandung",
      area: "270 m",
      scope: "Exterior",
      numberOfImages: 4,
    },
    {
      name: "OJ House",
      type: "Residential",
      year: "2023",
      location: "Daan Mogot, West Jakarta",
      area: "185 m",
      scope: "Exterior",
      numberOfImages: 4,
    },
    {
      name: "JH House",
      type: "Residential",
      year: "2023",
      location: "Tanjung Duren, West Jakarta",
      area: "275 m",
      scope: "Exterior",
      numberOfImages: 4,
    },
    {
      name: "DJ House",
      type: "Residential",
      year: "2023",
      location: "Penyaringan, Bali",
      area: "405 m",
      scope: "Exterior",
      numberOfImages: 10,
    },
    {
      name: "SA House",
      type: "Residential",
      year: "2023",
      location: "Alam Sutera, South Tangerang",
      area: "1030 m",
      scope: "Exterior",
      numberOfImages: 4,
    },
    {
      name: "JN Resort",
      type: "Resort",
      year: "2023",
      location: "Nusa Penida",
      area: "800 m",
      scope: "Exterior & Interior",
      numberOfImages: 4,
    },
    {
      name: "KS House",
      type: "Residential",
      year: "2023",
      location: "Kavling DKI, West Jakarta",
      area: "175 m",
      scope: "Exterior",
      numberOfImages: 4,
    },
    {
      name: "SV House",
      type: "Residential",
      year: "2023",
      location: "BSD, South Tangerang",
      area: "420 m",
      scope: "Exterior",
      numberOfImages: 5,
    },
    {
      name: "SJ House",
      type: "Residential",
      year: "2022",
      location: "Kopo, Bandung",
      area: "185 m",
      scope: "Exterior",
      numberOfImages: 5,
    },
    {
      name: "CC House",
      type: "Residential",
      year: "2022",
      location: "Taman Kopo, Bandung",
      area: "130 m",
      scope: "Design & Build",
      numberOfImages: 4,
    },
    {
      name: "GB Apartment",
      type: "Residential",
      year: "2019",
      location: "Bintaro, South Tangerang",
      area: "21.5 ~ 45.6 m",
      scope: "Interior",
      numberOfImages: 4,
    },
    {
      name: "TC House",
      type: "Residential",
      year: "2021",
      location: "Citraland, Makassar",
      area: "240 m",
      scope: "Interior",
      numberOfImages: 8,
    },
    {
      name: "AW House",
      type: "Residential",
      year: "2020",
      location: "Westhoff, Bandung",
      area: "570 m",
      scope: "Facade",
      numberOfImages: 8,
    },
    {
      name: "YB House",
      type: "Residential",
      year: "2020",
      location: "Bone, South Sulawesi",
      area: "42 m",
      scope: "Interior",
      numberOfImages: 5,
    },
  ]);

  const cards = [];

  function formatProjectName(name) {
    return name.replace(" ", "_");
  }

  for (let i = 0; i < projects.length; i++) {
    cards.push(
      <section className={styles["card-container"]} key={i}>
        <Link href={`/project/${formatProjectName(projects[i].name)}`}>
          <div className={styles["image-wrapper"]}>
            <Image
              className={styles.image}
              src={`/projects/${formatProjectName(projects[i].name)}.webp`}
              width={360}
              height={270}
              alt={`${formatProjectName(projects[i].name)}.webp`}
            />
          </div>
        </Link>
        <h5 className={styles.name}>{projects[i]?.name}</h5>
        <h5 className={styles.year}>{projects[i]?.year}</h5>
      </section>
    );
  }

  return (
    <section className={styles["project-card-container"]}>{cards}</section>
  );
}
