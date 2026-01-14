import "./App.css";
import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHero from "./components/sections/SectionHero";
import SectionTechLoop from "./components/sections/SectionTechLoop";
import SectionReasons from "./components/sections/SectionReasons";
import SectionProjects from "./components/sections/SectionProjects";
import SectionServices from "./components/sections/SectionServices";
import BackgroundAnimation from "./components/ui/BackgroundAnimation";
import Footer from "./components/sections/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const refContent = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=1100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-(--bg-1)">
      <SectionHero />
      <SectionTechLoop />
      <div ref={containerRef} className="z-10">
        <BackgroundAnimation />
      </div>

      <div ref={refContent} className="relative">
        <SectionServices />
        <SectionProjects />
        <SectionReasons />
      </div>

      <Footer />
    </div>
  );
}

export default App;
