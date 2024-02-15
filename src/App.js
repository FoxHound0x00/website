import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Article from './pages/articles/article2';



const App = () => {
  return (
    <Router >
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/articles/article:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
