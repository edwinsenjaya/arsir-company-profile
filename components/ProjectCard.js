import styles from "@/styles/project-card.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard() {
  const projectsData = JSON.parse(localStorage.getItem("projectsData"));

  const cards = [];

  function formatProjectName(name) {
    return name.replace(" ", "_");
  }

  for (let i = 0; i < projectsData.length; i++) {
    cards.push(
      <section className={styles["card-container"]} key={i}>
        <Link href={`/project/${formatProjectName(projectsData[i].name)}`}>
          <div
            className={styles["image-wrapper"]}
            style={{ width: "360px", height: "270px", objectFit: "cover" }}
          >
            <Image
              className={styles.image}
              src={`/projects/${formatProjectName(projectsData[i].name)}.jpg`}
              width={360}
              height={270}
              alt={`${formatProjectName(projectsData[i].name)}.jpg`}
            />
          </div>
        </Link>
        <h5 className={styles.name}>{projectsData[i]?.name}</h5>
        <h5 className={styles.year}>{projectsData[i]?.year}</h5>
      </section>
    );
  }

  return (
    <section className={styles["project-card-container"]}>{cards}</section>
  );
}
