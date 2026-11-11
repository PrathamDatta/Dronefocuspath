import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { Stats, Capabilities, Editions, Team, Faq, Cta, Footer } from "../components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Capabilities />
        <Editions />
        <Team />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
