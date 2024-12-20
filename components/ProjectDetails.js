import styles from "@/styles/project-details.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProjectDetails() {
  const router = useRouter();
  let projectName = router.query.name;

  const projectsData = JSON.parse(localStorage.getItem("projectsData"));
  let indexRight;

  const project = projectsData?.find((el, i) => {
    i + 1 === projectsData.length ? (indexRight = 0) : (indexRight = i + 1);
    return el.name === projectName?.replace("_", " ");
  });

  function formatProjectName(name) {
    return name?.replace(" ", "_");
  }

  return (
    <section className={styles["project-details-container"]}>
      <h4 className={styles["project-name"]}>{project?.name}</h4>
      <section className={styles["project-info"]}>
        <section className={styles.top}>
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
        </section>
        <section className={styles.bottom}>
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
      <Image
        key={project?.name}
        src={`/project/${formatProjectName(project?.name)}.png`}
        alt={`${formatProjectName(project?.name)}.png`}
        height={1761.3}
        width={1000}
        className={styles["project-images"]}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <Link
        href={`/project/${formatProjectName(projectsData[indexRight]?.name)}`}
        className={styles["project-link"]}
      >
        Next Project &#x2192;
      </Link>
    </section>
  );
}
