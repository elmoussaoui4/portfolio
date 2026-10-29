import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Accueil", to: "home" },
    { name: "À propos", to: "about" },
    { name: "Compétences", to: "skills" },
    { name: "Projets", to: "projects" },
    { name: "Expérience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">

        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/CV_ELMOUSSAOUI_MEHDI.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Télécharger le CV
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Télécharger le CV
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
