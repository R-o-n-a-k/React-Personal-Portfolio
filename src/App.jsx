import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Career from "./components/career/Career";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/scrollup/ScrollUp";
import Footer from "./components/footer/Footer";
import React, { useState, useEffect } from "react";
import Loader from "./components/header/Loader";
import AnimateOnScroll from "./components/AnimateOnScroll";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Projects />
            <Career />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
          <AnimateOnScroll />
        </div>
      )}
    </>
  );
}

export default App;
