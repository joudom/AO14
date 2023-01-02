import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navi from './components/Navi';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Video from './pages/Video';
import Photo from './pages/Photo';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Navi />
            <Routes>
              <Route exact path='/'       element={<Home    />} />
              <Route path='/about'        element={<About   />} />
              <Route path='/contact'      element={<Contact />} />
              <Route path='/media/videos' element={<Video   />} />
              <Route path='/media/photos' element={<Photo   />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;