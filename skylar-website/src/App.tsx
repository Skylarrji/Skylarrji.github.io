import './App.css'
import NavBar from './components/Navbar/Navbar.js';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home.js';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-pastelBlue to-pastelPink">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <HomePage />
      {/* <h1 className="text-4xl font-medium">Hello, Tailwind!</h1> */}
    </div>
  );
}

export default App;
