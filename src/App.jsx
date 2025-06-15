import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Services from './Components/service ';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
};

export default App;