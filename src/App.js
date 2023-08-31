import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Gallery from './Pages/Gallery';
import Projects from './Pages/Projects';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />       
        </Route>

      </Routes>
    </Router>
  );
}

export default App;