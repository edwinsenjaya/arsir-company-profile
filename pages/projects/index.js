import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>Arsir Architect</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header></Header>
      <div style={{ height: "800px" }}></div>
      <Footer></Footer>
    </>
  );
}
