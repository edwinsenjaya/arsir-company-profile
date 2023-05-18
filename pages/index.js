import Head from "next/head";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";

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
      <div
        style={{
          height: "1000px",
          width: "100%",
          backgroundImage: "linear-gradient(lightgrey, #303030)",
        }}
      ></div>
    </>
  );
}
