import styles from "@/styles/thumbnails.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

export default function Thumbnails() {
  let $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }

  const [projectsData, setProjectsData] = useState([
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
      name: "YB House",
      type: "Residential",
      year: "2020",
      location: "Bone, South Sulawesi",
      area: "42 m",
      scope: "Interior",
      numberOfImages: 5,
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
      name: "CC House",
      type: "Residential",
      year: "2022",
      location: "Taman Kopo, Bandung",
      area: "130 m",
      scope: "Design & Build",
      numberOfImages: 4,
    },
    {
      name: "SJ House",
      type: "Residential",
      year: "2023",
      location: "Kopo, Bandung",
      area: "185 m",
      scope: "Exterior",
      numberOfImages: 5,
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
      name: "SA House",
      type: "Residential",
      year: "2023",
      location: "Alam Sutera, South Tangerang",
      area: "410 m",
      scope: "Exterior",
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
      name: "DJ House",
      type: "Residential",
      year: "2023",
      location: "Penyaringan, Bali",
      area: "405 m",
      scope: "Exterior",
      numberOfImages: 10,
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
      name: "JN Resort",
      type: "Resort",
      year: "2023",
      location: "Nusa Penida",
      area: "800 m",
      scope: "Exterior & Interior",
      numberOfImages: 8,
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
      name: "KS House",
      type: "Residential",
      year: "2023",
      location: "Kavling DKI, West Jakarta",
      area: "175 m",
      scope: "Exterior",
      numberOfImages: 4,
    },
    {
      name: "RT House",
      type: "Town House",
      year: "2023",
      location: "Setraduta, Bandung",
      area: "270 m",
      scope: "Exterior",
      numberOfImages: 4,
    },
  ]);

  function formatProjectName(name) {
    return name.replace(" ", "_");
  }

  const thumbnailImages = [];
  const projectList = [];
  for (let i = 0; i < projectsData.length; i++) {
    thumbnailImages.push(
      <Link
        key={i}
        href={`/project/${formatProjectName(projectsData[i].name)}`}
        className={styles["content-wrapper"]}
        style={
          i === projectsData.length - 1
            ? { marginRight: "0" }
            : { marginRight: "0" }
        }
      >
        <div className={styles["thumbnail-item"]}>
          <img
            className={styles["thumbnail-image"]}
            src={`/thumbnail/${formatProjectName(projectsData[i].name)}.jpg`}
            alt={`${formatProjectName(projectsData[i].name)}`}
          />
          <div className={styles["thumbnail-text"]}>{projectsData[i].name}</div>
          <div className={styles["thumbnail-text"]}>
            {projectsData[i].location}
          </div>
          <div className={styles["thumbnail-cover"]}></div>
        </div>
      </Link>
    );

    projectList.push(projectsData[i]);
  }

  if (typeof window !== "undefined") {
    localStorage.setItem("projectsData", JSON.stringify(projectList));
  }

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const Responsive = {
    1280: {
      items: 4,
      margin: 20,
      loop: true,
      nav: true,
      autoWidth: true,
      lazyLoad: true,
      dots: false,
      navText: [
        `<div style="font-size: 28px; line-height: 1; margin-top: -4px;"><</div>`,
        `<div style="font-size: 28px; line-height: 1; margin-top: -4px;">></div>`,
      ],
    },
    0: {
      items: 2,
      margin: 20,
      loop: true,
      nav: true,
      autoWidth: true,
      lazyLoad: true,
      dots: false,
      navText: [
        `<div style="font-size: 28px; line-height: 1; margin-top: -4px;"><</div>`,
        `<div style="font-size: 28px; line-height: 1; margin-top: -4px;">></div>`,
      ],
    },
  };

  return (
    <>
      <section className={styles["thumbnail-wrapper"]}>
        <OwlCarousel
          className="owl-carousel owl-theme"
          loop
          responsive={Responsive}
          autoplay={true}
          autoplayTimeout={3000}
        >
          {/* <section className={styles["thumbnail-container"]}> */}
          {thumbnailImages}
          {/* </section> */}
        </OwlCarousel>
      </section>
    </>
  );
}
