import styles from "@/styles/project-card.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard() {
  const projects = JSON.parse(localStorage.getItem("projects"));

  const cards = [];

  function formatProjectName(name) {
    return name.replace(" ", "_");
  }

  for (let i = 0; i < projects.length; i++) {
    cards.push(
      <section className={styles["card-container"]} key={i}>
        <Link href={`/project/${formatProjectName(projects[i].name)}`}>
          <div
            className={styles["image-wrapper"]}
            style={{ width: "360px", height: "270px", objectFit: "cover" }}
          >
            <Image
              className={styles.image}
              src={`/projects/${formatProjectName(projects[i].name)}.jpg`}
              width={360}
              height={270}
              alt={`${formatProjectName(projects[i].name)}.jpg`}
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
