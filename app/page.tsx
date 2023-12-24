import Link from "next/link";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-14 md:px-28 justify-center item-center scroll-smooth">
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
      </div>
    </>
  );
}
