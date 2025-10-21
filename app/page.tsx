import dynamic from "next/dynamic";
import Main from "@/components/Main";
import About from "@/components/About";
import LoadingState from "@/components/LoadingState";

// Lazy load below-fold components
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <LoadingState />,
  ssr: true,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <LoadingState />,
  ssr: true,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <LoadingState />,
  ssr: true,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <LoadingState />,
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}

