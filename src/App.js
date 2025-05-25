import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer />
    </>
  );
}


export default App;
