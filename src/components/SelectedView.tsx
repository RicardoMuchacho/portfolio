import { useEffect, useState } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import { useViewcontext } from "@/hooks/useContext";
import Education from "./Education";

export default function SelectedView() {
  const { currentView } = useViewcontext();
  const [view, setView] = useState(currentView);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (currentView !== view) {
      setIsTransitioning(true);
      setTimeout(() => {
        setView(currentView);
        setIsTransitioning(false);
      }, 300);
    }
    // eslint-disable-next-line
  }, [currentView]);

  return (
    <section
      id="selected-view"
      className={`flex flex-col justify-center px-12 py-12 items-center 
      transition-opacity duration-500 ease-in-out 
      ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
    >
      {view === "Projects" && <Projects />}
      {view === "Experience" && <Experience />}
      {view === "Education" && <Education />}
    </section>
  );
}
