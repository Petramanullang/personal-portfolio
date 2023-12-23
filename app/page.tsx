import Link from "next/link";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-28 justify-center item-center">
        <HeroSection />
        <ProjectSection />
        {/* <SkillsSection /> */}
      </div>
    </>
  );
}
