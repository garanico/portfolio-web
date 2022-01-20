import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

//components
import About from './components/About';
import Footer from './components/Footer'
import Navbar from './components/Navbar';

function App() {
  return (

    <div className="App">
      <Navbar />
      <About />
      <Footer />
      
    </div>
  );
}

export default App;
