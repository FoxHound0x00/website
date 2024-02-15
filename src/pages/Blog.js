import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './Blog.css'

import articlesData from './articles/articles.json';


const HeaderButton = ({ to, children }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
    >
      <Link to={to}>{children}</Link>
    </motion.li>
  )
}
const ArticleLink = ({ number, title, link, date }) => {
  console.log(link);
  return (
    <div className="article-link">
      <div className="article-details">
        <div className="article-title">
          <Link to={`/articles/article${number}`}>{number}. {title}</Link></div>
        <div className="article-date">{date}</div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const articleLinks = articlesData.map((article) => (
    <ArticleLink key={article.title} number={article.id} title={article.title} link={article.link} date={article.date} />
  ));




  return (
    <div className="blog-page">
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
              <HeaderButton className="btn btn-primary" to="/">Home</HeaderButton>
            </li>
          </ul>
        </motion.nav>
      </header>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚧 This page is still under construction. 🚧
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Please check back later for updates!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="articles-list"
      >
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="articles-list"
      >
        {articleLinks}
      </motion.div>
    </div>
  );
};

export default BlogPage;
