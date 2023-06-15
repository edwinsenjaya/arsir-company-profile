import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  loading: () => <p>Loading...</p>,
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
      <ProjectCard></ProjectCard>
      <Footer></Footer>
    </>
  );
}
