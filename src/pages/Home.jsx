import About from "./sections/About";
import Academics from "./sections/Academics";
import Footer from "../components/Footer";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Academics />
      <Footer />
    </>
  );
}
