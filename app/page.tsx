import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Learn from "@/components/learn";
import Practical from "@/components/practical";
import Highlights from "@/components/highlights";
import Details from "@/components/details";
import TechPark from "@/components/techpark";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Learn />
      <Practical />
      <Highlights />
      <Details />
      <TechPark />
      <Contact />
      <Footer />
    </>
  );
}