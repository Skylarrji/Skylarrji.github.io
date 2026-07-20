import React, { useRef } from 'react';
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
    <div className="w-screen bg-notionBg">
      <BrowserRouter>
        <NavBar handleScroll={handleScroll} refs={{ homeRef, aboutRef, experienceRef, projectsRef, articlesRef }} />
      </BrowserRouter>

      <div ref={homeRef}>
        <HomePage />
      </div>

      <div className="h-px bg-notionBorder mx-auto max-w-[960px] my-12" />

      <div ref={aboutRef}>
        <AboutPage />
      </div>

      <div className="h-px bg-notionBorder mx-auto max-w-[960px] my-12" />

      <div ref={experienceRef}>
        <WorkExperiencePage />
      </div>

      <div className="h-px bg-notionBorder mx-auto max-w-[960px] my-12" />

      <div ref={projectsRef}>
        <ProjectsPage />
      </div>

      <div className="h-px bg-notionBorder mx-auto max-w-[960px] my-12" />
      
      <div ref={articlesRef}>
        <ArticlesPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
