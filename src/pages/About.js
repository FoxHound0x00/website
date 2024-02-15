import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { Link } from 'react-router-dom';


import image1 from './images/dirty_harry_2.jpg';
import image2 from './images/csny.jpg';
import image3 from './images/hl2.jpg';
import image4 from './images/kin.jpg';
import image5 from './images/gita.jpg';


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


const About = () => {

  
const images = [
  {
    id: 1,
    src: image1,
    alt: 'Dirty Harry 2',
    title: 'Movies',
    description: " I love watching movies in general. Some of my all time favorite actors are Samuel L. Jackson , Christian Bale , Robert De Niro , Al Pacino , Clint Eastwood , Brad Pitt."
  },
  {
    id: 2,
    src: image2,
    alt: 'CSNY',
    title: "Crosby, Stills, Nash & Young",
    description: "I don't have enough words to showcase my love for Crosby, Stills, Nash & Young. I love listening to 60's and 70's rock. Some of my favorite bands are Buffalo Springfield, The Beatles, The Byrds, CCR, The Kinks, The Rolling Stones, and others! I also like gangster rap; some of my favorite artists are 2pac, SnoopDogg, and Eazy-E."
  },
  {
    id: 3,
    src: image3,
    alt: 'Half Life 2',
    title: 'Half Life 2',
    description: "I love video games in general, and I believe that Half-Life 2 is the best game of all time. The Legend of Zelda and Metal Gear Solid have to be the most consistent video game series. My guilty pleasure video games are FF7 and Mirror's Edge."
  },
  {
    id: 4,
    src: image4,
    alt: 'Kin',
    title: 'Kindaichi Shounen no Jikenbo',
    description: "This is the anime that got me into anime in the first place. It's still the best anime, in my opinion. As a kid during my summer holidays, I used to watch Kindaichi Case Files, Naruto, and City Hunter. I wish I could return to those days. I also like Steins;Gate and Vinland Saga. Berserk is the best manga ever made."
  },
  {
    id: 5,
    src: image5,
    alt: 'Bhagavad Gita',
    title: 'Bhagavad Gita',
    description: "I've read a lot of books, and when I say this is the best one I've ever read, trust me, I'm not lying. Some of my other favorite books are 1984, The Great Gatsby, The Godfather, and The Time Machine."
  }
];

  return (
    <div>
      <div className="about-section">
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
                <HeaderButton className="btn btn-primary" to="/projects">Projects</HeaderButton>
              </li>
              <li>
                <HeaderButton className="btn btn-primary" to="/blog">Blog</HeaderButton>
              </li>
            </ul>
          </motion.nav>
        </header>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm a CS student with a keen interest in tech and math . I have experience with a wide range of technologies and I'm always eager to learn more. When I'm not coding, you can usually find me reading books or watching cinema. I occasionally play videogames too !
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I exhibit a highly organized and dependable nature, effectively managing multiple priorities with a positive attitude. I believe that good communication is the key to success in any project. That's why I always strive to maintain open lines of communication with my team members. I'm also a firm believer in agile development and continuous improvement.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Furthermore, I possess a strong willingness to take on added responsibilities in order to successfully achieve team goals. My capabilities extend to tackling strenuous projects with the ability to generate esoteric and abstruse ideas.        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          If you're interested in working with me, feel free to reach out. I'd love to hear from you!
        </motion.p>
      </div>
      <div className="gallery-section">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My perspectives on various topics.
        </motion.h2>
        <motion.div
          className="image-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {images.map((image) => (
            <div className="image-container" key={image.id}>
              <motion.img
                src={image.src}
                alt={image.alt}
                whileHover={{ scale: 1.1 }}
              />
              <div className="image-description">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
