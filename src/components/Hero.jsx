import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* Left */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <p className="hello">👋 Hello, I'm</p>

          <h1>
            Mehdi
            <span> El Moussaoui</span>
          </h1>

          <h2>Full Stack Web Developer</h2>

          <p className="description">
            I build modern, responsive and high-performance web applications
            using React, Laravel, PostgreSQL and Docker. Passionate about
            creating clean UI and scalable backend solutions.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            {/* <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Download CV
            </a> */}

          </div>

          <div className="socials">

            <a href="https://github.com/elmoussaoui4" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/mehdi-el-moussaoui-91814933a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:elmoussaouimehdi23@gmail.com">
              <HiOutlineMail />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <div className="image-bg"></div>

          <img
            src="/M.jpg"
            alt="Profile"
          />
        </motion.div>

      </div>

      <motion.div
        className="scroll"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
};

export default Hero;