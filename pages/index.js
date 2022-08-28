import Head from "next/head";

import About from "../components/About";
import Contact from "../components/Contact";

import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // animate on scroll initialization
  // Aos.init({
  //   duration: 1800,
  //   offset: 0,
  // });
  return (
    <div>
      <Head>
        <title>Geoffrey | Front-End Developer</title>
        <meta
          name="geoffrey Mwangi Muthoni"
          content="FrontEnd Developer Geoffrey"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
