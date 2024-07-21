import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

type NavbarProps = {
  handleScroll: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    articlesRef: React.RefObject<HTMLDivElement>;
  };
};

export const Navbar: React.FC<NavbarProps> = ({ handleScroll, refs }) => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = [
        { id: 'home', ref: refs.homeRef.current },
        { id: 'about', ref: refs.aboutRef.current },
        { id: 'experience', ref: refs.experienceRef.current },
        { id: 'projects', ref: refs.projectsRef.current },
        { id: 'articles', ref: refs.articlesRef.current },
      ];

      sections.forEach((section) => { // goes through each section
        if (section.ref) {
          const rect = section.ref.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) { // checks if the section ref intersects with the viewport window
            setCurrentSection(section.id);
          }
        }
      });
      
    };

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent(); 

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [refs]);

  return (
    <div className={styles.navbar}>
      <a
        href="#home"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          padding: '0.75rem',
        }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <div className="bg-white rounded-full hidden lg:block md:block sm:block">
          <img className="w-12 h-12 p-2" src="/favicon.png" alt="Logo" />
        </div>
      </a>
        <div className="block">
          <div className="flex justify-end gap-1 sm:gap-4 md:gap-4 lg:gap-4 mr-4 flex-1">
            <a
              className={`${styles.navbarItem} ${currentSection === 'home' ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSection('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a
              className={`${styles.navbarItem} ${currentSection === 'about' ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSection('about');
                handleScroll(refs.aboutRef);
              }}
            >
              About
            </a>
            <a
              className={`${styles.navbarItem} ${currentSection === 'experience' ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSection('experience');
                handleScroll(refs.experienceRef);
              }}
            >
              Experience
            </a>
            <a
              className={`${styles.navbarItem} ${currentSection === 'projects' ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSection('projects');
                handleScroll(refs.projectsRef);
              }}
            >
              Projects
            </a>
            <a
              className={`${styles.navbarItem} ${currentSection === 'articles' ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSection('articles');
                handleScroll(refs.articlesRef);
              }}
            >
              Articles
            </a>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
