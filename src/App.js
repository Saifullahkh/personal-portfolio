import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './page/Home';
import About from './page/About';
import Skill from './page/Skill';
import Contact from './page/Contact';
import Footer from './component/Footer';
import Project from './page/Project';


function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
