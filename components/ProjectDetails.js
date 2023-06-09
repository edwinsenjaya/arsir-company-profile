import styles from "@/styles/project-details.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ProjectDetails() {
  const [projectsData, setProjectsData] = useState([
    {
      name: "KS House",
      type: "Residential",
      year: "2023",
      location: "Kavling DKI, West Jakarta",
      area: "175 m",
      scope: "Exterior",
    },
    {
      name: "SA House",
      type: "Residential",
      year: "2023",
      location: "Alam Sutera, South Tangerang",
      area: "410 m",
      scope: "Exterior",
    },
    {
      name: "TC House",
      type: "Residential",
      year: "2021",
      location: "Citraland, Makassar",
      area: "240 m",
      scope: "Interior",
    },
    {
      name: "AW House",
      type: "Residential",
      year: "2020",
      location: "Westhoff, Bandung",
      area: "570 m",
      scope: "Facade",
    },
    {
      name: "CC House",
      type: "Residential",
      year: "2022",
      location: "Taman Kopo, Bandung",
      area: "130 m",
      scope: "Design & Build",
    },
    {
      name: "GB Apartment",
      type: "Residential",
      year: "2019",
      location: "Bintaro, South Tangerang",
      area: "21.5 ~ 45.6 m",
      scope: "Interior",
    },
    {
      name: "YB House",
      type: "Residential",
      year: "2020",
      location: "Bone, South Sulawesi",
      area: "42 m",
      scope: "Interior",
    },
    {
      name: "JH House",
      type: "Residential",
      year: "2023",
      location: "Tanjung Duren, West Jakarta",
      area: "275 m",
      scope: "Exterior",
    },
    {
      name: "JN Resort",
      type: "Resort",
      year: "2023",
      location: "Nusa Penida",
      area: "800 m",
      scope: "Exterior & Interior",
    },
    {
      name: "DJ House",
      type: "Residential",
      year: "2023",
      location: "Penyaringan, Bali",
      area: "405 m",
      scope: "Exterior",
    },
    {
      name: "SV House",
      type: "Residential",
      year: "2023",
      location: "BSD, South Tangerang",
      area: "420 m",
      scope: "Exterior",
    },
    {
      name: "OJ House",
      type: "Residential",
      year: "2023",
      location: "Daan Mogot, West Jakarta",
      area: "185 m",
      scope: "Exterior",
    },
  ]);

  const router = useRouter();
  let projectName = router.query.name;

  const project = projectsData.find((el) => {
    return el.name === projectName?.replace("_", " ");
  });

  return (
    <section className={styles["project-details-container"]}>
      <section className={styles["project-details"]}>
        <h5>
          Project Name<span style={{ margin: "0 20px 0 20px" }}>:</span>
          {project.name}
        </h5>
        <h5>
          Type<span style={{ margin: "0 20px 0 89px" }}>:</span>
          {project.type}
        </h5>
        <h5>
          Year<span style={{ margin: "0 20px 0 94px" }}>:</span>
          {project.year}
        </h5>
      </section>
      <section className={styles["project-details"]}>
        <h5>
          Location<span style={{ margin: "0 20px 0 60px" }}>:</span>
          {project.location}
        </h5>
        <h5>
          Total Area<span style={{ margin: "0 20px 0 48px" }}>:</span>
          {project.area}&#xB2;
        </h5>
        <h5>
          Scope<span style={{ margin: "0 20px 0 85px" }}>:</span>
          {project.scope}
        </h5>
      </section>
    </section>
  );
}
