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
    description: "Création d'interfaces responsives et interactives avec React.",
  },
  {
    icon: <FaCode size={32} />,
    title: "Backend",
    description: "Développement d'API REST et d'applications web avec Laravel.",
  },
  {
    icon: <FaDatabase size={32} />,
    title: "Base de données",
    description: "Travail avec PostgreSQL, MySQL et MongoDB.",
  },
  {
    icon: <FaDocker size={32} />,
    title: "DevOps",
    description: "Utilisation de Docker et Linux pour créer des environnements évolutifs.",
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
          <p>À propos de moi</p>
          <h2>Qui suis-je ?</h2>
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

            <h3>Développeur Web Full Stack</h3>

            <p>
              Je suis Mehdi El Moussaoui, un développeur Full Stack passionné
              basé au Maroc. J'aime créer des applications web modernes,
              responsives et évolutives avec React, Laravel, PostgreSQL et Docker.
            </p>

            <p>
              J'aime apprendre de nouvelles technologies, résoudre des
              problèmes concrets et développer des applications avec un code
              propre et une excellente expérience utilisateur.
            </p>

            <div className="stats">

              <div className="stat-card">
                <h4>3+</h4>
                <span>Projets réalisés</span>
              </div>

              <div className="stat-card">
                <h4>2+</h4>
                <span>Années d'apprentissage</span>
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