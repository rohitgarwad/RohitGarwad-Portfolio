import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rohit Garwad",
  url: "https://rohitgarwad.vercel.app",
  jobTitle: "Java Full Stack & AI Developer",
  description: "Building intelligent web applications and AI-powered solutions using modern technologies.",
  email: "rohitgarwad@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/rohit-garwad/",
    "https://github.com/rohitgarwad",
    "https://x.com/rohitgarwad4",
  ],
  knowsAbout: [
    "Java", "Spring Boot", "React.js", "Next.js", "TypeScript",
    "LangChain", "Generative AI", "LLMs", "Python"
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Projects />
      <About />
      <Achievements />
      <Contact />
    </>
  );
}
