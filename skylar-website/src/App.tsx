import './App.css'
import NavBar from './components/Navbar/Navbar.js';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home.js';
import AboutPage from './pages/about.js';

function App() {
  return (
    <div className="w-screen bg-gradient-to-b from-pastelBlue to-pastelPink">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
