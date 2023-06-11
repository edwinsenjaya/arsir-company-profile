import styles from "@/styles/project-details.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProjectDetails() {
  const projectsData = JSON.parse(localStorage.getItem("projectsData"));
  let indexLeft;
  let indexRight;

  const router = useRouter();
  let projectName = router.query.name;

  const project = projectsData?.find((el, i) => {
    i - 1 < 0 ? (indexLeft = projectsData.length - 1) : (indexLeft = i - 1);
    i + 1 === projectsData.length ? (indexRight = 0) : (indexRight = i + 1);
    return el.name === projectName?.replace("_", " ");
  });

  function formatProjectName(name) {
    return name.replace(" ", "_");
  }

  return (
    <section className={styles["project-details-container"]}>
      <section className={styles["project-title"]}>
        <Link
          href={`/project/${formatProjectName(projectsData[indexLeft]?.name)}`}
          className={styles["project-link"]}
        >
          &#x2190; {projectsData[indexLeft]?.name}
        </Link>
        <h4 className={styles["project-name"]}>{project?.name}</h4>
        <Link
          href={`/project/${formatProjectName(projectsData[indexRight]?.name)}`}
          className={styles["project-link"]}
        >
          {projectsData[indexRight]?.name} &#x2192;
        </Link>
      </section>
      <section className={styles["project-info"]}>
        <section className={styles["project-details"]}>
          <h5 className={styles.title}>Type</h5>
          <h5 className={styles.info}>{project?.type}</h5>
        </section>
        <section className={styles["project-details"]}>
          <h5 className={styles.title}>Year</h5>
          <h5 className={styles.info}>{project?.year}</h5>
        </section>
        <section className={styles["project-details"]}>
          <h5 className={styles.title}>Location</h5>
          <h5 className={styles.info}>{project?.location}</h5>
        </section>
        <section className={styles["project-details"]}>
          <h5 className={styles.title}>Total Area</h5>
          <h5 className={styles.info}>{project?.area}&#xB2;</h5>
        </section>
        <section className={styles["project-details"]}>
          <h5 className={styles.title}>Scope</h5>
          <h5 className={styles.info}>{project?.scope}</h5>
        </section>
      </section>
    </section>
  );
}
