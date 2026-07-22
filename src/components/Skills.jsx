import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import "./Skills.css";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 color="#E44D26" size={55} />,
    level: 95,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt color="#1572B6" size={55} />,
    level: 70,
  },
  {
    name: "JavaScript",
    icon: <FaJs color="#F7DF1E" size={55} />,
    level: 50,
  },
  {
    name: "React",
    icon: <FaReact color="#61DAFB" size={55} />,
    level: 75,
  },
  {
    name: "Laravel",
    icon: <FaLaravel color="#FF2D20" size={55} />,
    level: 80,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss color="#38BDF8" size={55} />,
    level: 70,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color="#336791" size={55} />,
    level: 80,
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#00758F" size={55} />,
    level: 85,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#47A248" size={55} />,
    level: 80,
  },
  {
    name: "Git",
    icon: <FaGitAlt color="#F05032" size={55} />,
    level: 90,
  },
  {
    name: "Docker",
    icon: <FaDocker color="#2496ED" size={55} />,
    level: 65,
  },
  {
    name: "Linux",
    icon: <FaLinux color="#ffffff" size={55} />,
    level: 50,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <motion.div
          className="skills-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <p>My Skills</p>
          <h2>Technologies I Use</h2>
          <div className="line"></div>
        </motion.div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .4,
                delay: index * .05,
              }}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <div className="progress">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>

              <p className="percentage">
                {skill.level}%
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;