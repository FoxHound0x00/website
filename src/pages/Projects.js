import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';

const HeaderButton = ({ to, children, style }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
      style={style}
    >
      <Link to={to}>{children}</Link>
    </motion.li>
  )
}



const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/users/sud0x00/repos');
      const data = await response.json();
      setRepos(data);
    };

    fetchRepos();
  }, []);

  return (
    <div className="projects-page">
      <header>
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ul>
            <li>
              <HeaderButton className="btn btn-primary" to="/">Home</HeaderButton>
            </li>
            <li>
              <HeaderButton className="btn btn-primary" to="/about">About</HeaderButton>
            </li>
            <li>
              <HeaderButton className="btn btn-primary" to="/blog">Blog</HeaderButton>
            </li>
          </ul>
        </motion.nav>
      </header>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Here are some of the projects I've worked on:
      </motion.p>
      <div className="project-cards">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card card">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <img
                className="card-img-top"
                src={`https://github-readme-stats.vercel.app/api/pin/?username=sud0x00&repo=${repo.name}&theme=buefy`}
                alt={repo.name}
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">{repo.name}</h5>
              <p className="card-text">{repo.description}</p>
              <a href={repo.html_url} className="btn btn-primary card-link" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
