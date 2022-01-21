import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import About from './components/About';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Homepage from './components/Homepage';

function App() {
  const [currentPage, setCurrentPage] = useState('/')

  return (

    <div className="App">
      <HashRouter>
        <Navbar />
          <Routes>
              <Route exact path="/" element={<Homepage/>} />
          </Routes>

          <Routes>
              <Route exact path="/about" element={<About/>} />
          </Routes>
          <Routes>
              <Route exact path="Projects" element={<Projects/>} />
          </Routes>
        <Footer />
      </HashRouter>
      
      
    </div>
  );
}

export default App;
