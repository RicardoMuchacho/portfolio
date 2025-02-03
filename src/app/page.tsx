import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden text-black bg-white">
      <Navigation />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
