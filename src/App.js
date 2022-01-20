import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

//components
import About from './components/About';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Projects />
      {/* <About /> */}
      <Footer />
      
    </div>
  );
}

export default App;
