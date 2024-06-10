import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Testimonials";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="About Us" title="Get involved with us" />
        <About />
        <Title subTitle="Experience" title="What we offer you" />
        <Experience />
        <Title subTitle="Projects" title="Some of our work" />
        <Projects />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
      </div>
    </div>
  );
}

export default App;
