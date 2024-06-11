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
        <Title subTitle="Full digital transformations" title="starts with Zodo'sTech" />
        <About />
        <Title subTitle="Premium experience" title="to expedite excellent results" />
        <Experience />
        <Title subTitle="A galleria of some of" title=" our partners and clients" />
        <Projects />
        <Title subTitle="Let us talk about" title="getting you digital in real time" />
        <Contact />
      </div>
    </div>
  );
}

export default App;
