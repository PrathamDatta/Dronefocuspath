import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { Stats, Capabilities, Editions, Team, Faq, Cta, Footer } from "../components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <div className="rail-offset pt-16 md:pt-0">
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
      </div>
    </>
  );
}
