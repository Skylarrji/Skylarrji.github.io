import './App.css'
import NavBar from './components/Navbar/Navbar.js';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home.js';
import AboutPage from './pages/about.js';
import WorkExperiencePage from './pages/workExperience.js';
import ProjectsPage from './pages/projects.js';

function App() {
  return (
    <div className="w-screen bg-gradient-to-b from-pastelBlue to-pastelPurple">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <HomePage />
      <AboutPage />
      <WorkExperiencePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
