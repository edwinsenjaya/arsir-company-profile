import styles from "@/styles/thumbnails.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Thumbnails() {
  let $ = require("jquery");

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    window.$ = window.jQuery = require("jquery");
    setScreenWidth(window.outerWidth);
  }, []);

  const [projectsData, setProjectsData] = useState([
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
      year: "2022",
      location: "Kopo, Bandung",
      area: "185 m",
      scope: "Exterior",
      numberOfImages: 5,
    },
    {
      name: "TC House",
      type: "Residential",
      year: "2021",
      location: "Citraland, Makassar",
      area: "240 m",
      scope: "Interior",
      numberOfImages: 8,
      hideOnMobile: true,
    },
    {
      name: "GB Apartment",
      type: "Residential",
      year: "2019",
      location: "Bintaro, South Tangerang",
      area: "21.5 ~ 45.6 m",
      scope: "Interior",
      numberOfImages: 4,
      hideOnMobile: true,
    },
    {
      name: "YB House",
      type: "Residential",
      year: "2020",
      location: "Bone, South Sulawesi",
      area: "42 m",
      scope: "Interior",
      numberOfImages: 5,
      hideOnMobile: true,
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
      name: "SV House",
      type: "Residential",
      year: "2023",
      location: "BSD, South Tangerang",
      area: "420 m",
      scope: "Exterior",
      numberOfImages: 5,
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
      name: "SA House",
      type: "Residential",
      year: "2023",
      location: "Alam Sutera, South Tangerang",
      area: "1030 m",
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
      name: "NJ House",
      type: "Residential",
      year: "2023",
      location: "Nusa Dua, Bali",
      area: "225 m",
      scope: "Exterior",
      numberOfImages: 1,
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
      name: "RT Townhouse",
      type: "Townhouse",
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
    if (
      !projectsData[i].hideOnMobile ||
      (screenWidth > 600 && !projectsData[i].hideOnDesktop)
    ) {
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
              src={`/thumbnail/${formatProjectName(projectsData[i].name)}.webp`}
              alt={`${formatProjectName(projectsData[i].name)}.webp`}
            />
            <div className={styles["thumbnail-text"]}>
              {projectsData[i].name}
            </div>
            <div className={styles["thumbnail-text"]}>
              {projectsData[i].location}
            </div>
            <div className={styles["thumbnail-cover"]}></div>
          </div>
        </Link>
      );
    }

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
          {thumbnailImages}
        </OwlCarousel>
      </section>
    </>
  );
}
