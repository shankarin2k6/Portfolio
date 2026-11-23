import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About'; 
import Languages from './components/Languages';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import ParticlesBright from "./ParticlesBright";
import DarkVeil from './components/DarkVeil'; // 1. Import the animation

// App.js
function App() {
  return (
    <div className="relative">
      
      {/* 1. FIXED BACKGROUND ANIMATION */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DarkVeil />
      </div>

      <Navbar />
      
      {/* 2. MAIN CONTENT WRAPPER 
         - We add the background color HERE with opacity (/80).
         - We ensure this wrapper covers the full height.
      */}
      <div className="pt-20 min-h-screen relative z-10 transition-colors duration-500
                      bg-white/80 dark:bg-gray-900/80"> 
        
        {/* All your sections sit inside this semi-transparent wrapper */}
        <About />
        <Languages />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
export default App;