import dynamic from "next/dynamic";

import Head from "next/head";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CoreValue from "@/components/CoreValue";
import Footer from "@/components/Footer";
const Thumbnail = dynamic(() => import("@/components/Thumbnail"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

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
      <Thumbnail></Thumbnail>
      <Footer></Footer>
    </>
  );
}
