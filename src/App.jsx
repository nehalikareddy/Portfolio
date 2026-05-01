import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Milestones from './components/Milestones';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="content-wrapper">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Stack />
            <Projects />
            <Milestones />
            <Contact />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
