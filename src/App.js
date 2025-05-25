import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About/>
      <Contact/>
      <Footer />
    </>
  );
}


export default App;
