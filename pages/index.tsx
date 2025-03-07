import Category from "@/ui/Category/Category";
import Contact from "@/ui/Contact/Contact";
import Discovery from "@/ui/Discovery/Discovery";
import Hero from "@/ui/Hero/Hero";
import Navbar from "@/ui/Navbar/Navbar";
import News from "@/ui/News/News";
import Statistics from "@/ui/Statistics/Statistics";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>African Thinkers | Accueil</title>
        <meta
          name="description"
          content="Plateforme dédiée aux penseurs, innovateurs et leaders africains"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />

      <Category />

      <Statistics />

      <Discovery />

      <News />

      <Contact />
    </>
  );
}
