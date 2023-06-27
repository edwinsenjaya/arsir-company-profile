// import dynamic from "next/dynamic";

import Head from "next/head";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CoreValue from "@/components/CoreValue";
import Footer from "@/components/Footer";
import WhatWeDo from "@/components/WhatWeDo";
// const Thumbnail = dynamic(() => import("@/components/Thumbnail"), {
//   ssr: false,
// });

import Thumbnails from "@/components/Thumbnails";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arsir Architect</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <CoreValue></CoreValue>
      {/* <Thumbnail></Thumbnail> */}
      <Thumbnails></Thumbnails>
      <WhatWeDo></WhatWeDo>
      <Footer></Footer>
    </>
  );
}
