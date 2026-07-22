import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./Experience.css";

const experiences = [
  {
    icon: <FaBriefcase />,
    title: "Full Stack Developer Intern",
    company: "Duo Info",
    date: "2026",
    description:
      "Participated in the development of DuoInfoNexus, a centralized management platform. Worked with Laravel, React, PostgreSQL and Docker while building responsive interfaces and backend features.",
  },
  {
    icon: <FaBriefcase />,
    title: "Personal Projects",
    company: "Self Learning",
    date: "2024 - Present",
    description:
      "Built several full-stack applications including inventory management systems, portfolio websites and a gym management system.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Personal Projects",
    company: "Self Learning",
    date: "2024 - Present",
    description:
      "Developed several personal projects including a Portfolio Website and a Gym Management System to improve my practical skills.",
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
          <p>Experience</p>
          <h2>My Journey</h2>
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