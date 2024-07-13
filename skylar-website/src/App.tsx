import './App.css'
import NavBar from './components/Navbar/Navbar.js';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home.js';
import AboutPage from './pages/about.js';
import WorkExperiencePage from './pages/workExperience.js';
import ProjectsPage from './pages/projects.js';
import ArticlesPage from './pages/articles.js';
import Footer from './components/Footer/footer.js';

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
      <ArticlesPage />
      <Footer />
    </div>
  );
}

export default App;
