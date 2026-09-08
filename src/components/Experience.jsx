import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./Experience.css";

const experiences = [
  {
    icon: <FaBriefcase />,
    title: "Stagiaire Développeur Full Stack",
    company: "Duo Info",
    date: "2026",
    description:
      "Participation au développement de DuoInfoNexus, une plateforme de gestion centralisée. Travail avec Laravel, React, PostgreSQL et Docker pour créer des interfaces responsives et développer des fonctionnalités backend.",
  },
  {
    icon: <FaBriefcase />,
    title: "Projets personnels",
    company: "Autoformation",
    date: "2024 - Présent",
    description:
      "Réalisation de plusieurs applications Full Stack, notamment des systèmes de gestion de stock, des sites portfolio et un système de gestion de salle de sport.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Projets personnels",
    company: "Autoformation",
    date: "2024 - Présent",
    description:
      "Développement de plusieurs projets personnels, notamment un site Portfolio et un système de gestion de salle de sport, afin d'améliorer mes compétences pratiques.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="experience-title"
        >
          <p>Expérience</p>
          <h2>Mon parcours</h2>
          <div className="line"></div>
        </motion.div>

        <div className="timeline">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
            >

              <div className="timeline-icon">
                {item.icon}
              </div>

              <div className="timeline-card">

                <span className="date">
                  {item.date}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;