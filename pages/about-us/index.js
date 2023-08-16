import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Page() {
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
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  );
}
