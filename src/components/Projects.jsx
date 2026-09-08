import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Une plateforme web de gestion centralisée",
    image: "/projects/duoinfonexus.png",
    description:
      "Une plateforme de gestion centralisée développée lors de mon stage pour gérer les produits, les catégories, les mouvements de stock et les utilisateurs à travers un tableau de bord moderne.",
    tech: ["Laravel", "React", "PostgreSQL", "Docker"],
    report: "/reports/Rapport_Mehdi_El_Moussaoui.pdf",
  },
  {
    title: "Système de Gestion de Salle de Sport",
    image: "/projects/ecommerce.png",
    description:
      "Un système complet de gestion de salle de sport permettant de simplifier l'inscription des membres, la gestion des abonnements, la planification des coachs et le suivi des paiements.",
    tech: ["Laravel", "MySQL"],
    github: "https://github.com/elmoussaoui4/Systeme_de_Gestion_de_Salle_de_Sport.git",
  },
  {
    title: "Site Portfolio",
    image: "/projects/portfolio.png",
    description:
      "Mon portfolio personnel présentant mes projets, mes compétences techniques et mon expérience, développé avec React et des technologies web modernes.",
    tech: ["React", "CSS", "Framer Motion"],
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="projects-title"
        >
          <p>Mes réalisations</p>
          <h2>Projets réalisés</h2>
          <div className="line"></div>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              whileHover={{ y: -10 }}
            >

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">

                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-live"
                    >
                      <FaFilePdf />
                      Rapport
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-github"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-live"
                    >
                      <FaExternalLinkAlt />
                      Démo
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;