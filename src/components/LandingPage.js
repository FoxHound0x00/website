import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './LandingPage.css';

const HeaderButton = ({ to, children }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
    >
      <Link to={to}>{children}</Link>
    </motion.li>
  )
}


const LandingPage = () => {
  return (
    <div className="landing-page">
        <header>
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <ul>
              <li>
                <HeaderButton className="btn btn-primary" to="/about">About</HeaderButton>
              </li>
              <li>
                <HeaderButton className="btn btn-primary" to="/projects">Projects</HeaderButton>
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
        Howdy pardner! I'm Sudhanva Athreya 🤠
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Welcome to My Portfolio Site
      </motion.p>
      <div className="icons">
        <motion.a
          href="https://www.linkedin.com/in/sudhanva04102002/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin size={40} />
        </motion.a>
        <motion.a
          href="https://github.com/sud0x00"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub size={40} />
        </motion.a>
        <motion.a
          href="mailto:athreya.sudhanva@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaEnvelope size={40} />
        </motion.a>
      </div>
    </div>
  );
};

export default LandingPage;
