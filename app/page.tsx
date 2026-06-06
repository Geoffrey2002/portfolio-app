import dynamic from "next/dynamic";
import Main from "@/components/Main";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import LoadingState from "@/components/LoadingState";

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

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <LoadingState />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
