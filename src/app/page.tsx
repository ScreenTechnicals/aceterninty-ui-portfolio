import { AboutSection, HeroSection, ProjectsSection } from "@/components";

const Home = () => {
  return (
    <main className="min-h-svh relative bg-[#000319]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
};

export default Home;
