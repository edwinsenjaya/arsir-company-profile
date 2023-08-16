import Head from "next/head";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CoreValue from "@/components/CoreValue";
import Footer from "@/components/Footer";
import WhatWeDo from "@/components/WhatWeDo";
import Thumbnails from "@/components/Thumbnails";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arsir Architect - Architecture and Interior Design</title>
        <meta
          name="description"
          content="Arsir Architect: Transforming visions into reality through architecture and interior design mastery. Our canvas is space - embracing simplicity, minimalism, and modern aesthetics"
          key="desc"
        ></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <CoreValue></CoreValue>
      <Thumbnails></Thumbnails>
      <WhatWeDo></WhatWeDo>
      <Footer></Footer>
    </>
  );
}
