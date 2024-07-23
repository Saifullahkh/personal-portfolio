import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Skill from './pages/Skill';
import Feature from './pages/Feature';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './component/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skill />
      <Feature />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
