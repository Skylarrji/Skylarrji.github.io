import React, { useRef } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import WorkExperiencePage from './pages/workExperience';
import ProjectsPage from './pages/projects';
import ArticlesPage from './pages/articles';
import Footer from './components/Footer/footer';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Ref is null:', ref);
    }
  };

  return (
    <div className="w-screen bg-gradient-to-b from-pastelBlue to-pastelPurple">
      <BrowserRouter>
        <NavBar handleScroll={handleScroll} refs={{ homeRef, aboutRef, experienceRef, projectsRef, articlesRef }} />
      </BrowserRouter>

      <div ref={homeRef}>
      <HomePage />
      </div>

      <img className="w-screen mt-20" src={'/clouds.svg'}></img>

      <div ref={aboutRef}>
        <AboutPage />
      </div>

      <img className="w-screen mt-20" src={'/clouds.svg'}></img>

      <div ref={experienceRef}>
        <WorkExperiencePage />
      </div>

      <img className="w-screen mt-20" src={'/clouds.svg'}></img>

      <div ref={projectsRef}>
        <ProjectsPage />
      </div>

      <img className="w-screen mt-20" src={'/clouds.svg'}></img>
      
      <div ref={articlesRef}>
        <ArticlesPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
