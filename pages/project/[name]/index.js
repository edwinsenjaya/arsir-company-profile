import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetails = dynamic(() => import("@/components/ProjectDetails"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Arsir Architect</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header></Header>
      <ProjectDetails></ProjectDetails>
      <Footer></Footer>
    </>
  );
}
