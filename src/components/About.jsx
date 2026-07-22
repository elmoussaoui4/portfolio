import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import "./About.css";

const cards = [
  {
    icon: <FaLaptopCode size={32} />,
    title: "Frontend",
    description: "Building responsive and interactive interfaces with React.",
  },
  {
    icon: <FaCode size={32} />,
    title: "Backend",
    description: "Developing REST APIs and web applications using Laravel.",
  },
  {
    icon: <FaDatabase size={32} />,
    title: "Database",
    description: "Working with PostgreSQL, MySQL and MongoDB.",
  },
  {
    icon: <FaDocker size={32} />,
    title: "DevOps",
    description: "Using Docker and Linux to build scalable environments.",
  },
];

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <motion.div
          className="about-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <p>About Me</p>
          <h2>Who am I?</h2>
          <div className="line"></div>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <h3>Full Stack Web Developer</h3>

            <p>
              I'm Mehdi El Moussaoui, a passionate Full Stack Developer from
              Morocco. I enjoy creating modern, responsive and scalable web
              applications with React, Laravel, PostgreSQL and Docker.
            </p>

            <p>
              I love learning new technologies, solving real-world problems,
              and building applications with clean code and great user
              experience.
            </p>

            <div className="stats">

              <div className="stat-card">
                <h4>3+</h4>
                <span>Projects Completed</span>
              </div>

              <div className="stat-card">
                <h4>2+</h4>
                <span>Years Learning</span>
              </div>

            </div>

          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            {cards.map((card, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                className="service-card"
              >
                <div className="icon">
                  {card.icon}
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;