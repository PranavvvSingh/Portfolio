import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import React from 'react'

function App() {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(166deg, rgba(5,6,20,1) 20%, rgba(253,29,29,1) 55%, rgba(5,6,20,1) 80%)`,
        }}
      >
        <Header />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
