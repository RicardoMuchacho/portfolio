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
  }, [currentView]);

  return (
    <section
      id="selected-view"
      className={`flex flex-col justify-center h-full px-12 py-12 items-center sm:h-[440px]
      transition-opacity duration-500 ease-in-out 
      ${isTransitioning ? "opacity-0" : "opacity-100"}`}
    >
      {view === "Projects" && <Projects />}
      {view === "Experience" && <Experience />}
      {view === "Education" && <Education />}
    </section>
  );
}
