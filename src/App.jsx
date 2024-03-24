import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Career from "./components/career/Career";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Projects />
        <Career />
        <Contact />
      </main>
      <ScrollUp />
    </>
  );
}

export default App;
