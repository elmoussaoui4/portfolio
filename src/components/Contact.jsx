import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f2ry3u1",
        "template_1axkcxi",
        form.current,
        "30_bMhGdW2lyHIXnK"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        <motion.div
          className="contact-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>Contact</p>
          <h2>Let's Work Together</h2>
          <div className="line"></div>
        </motion.div>

        <div className="contact-content">

          {/* Left */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="info-card">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p>elmoussaouimehdi23@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhone className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+212 7 12 95 40 34</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Location</h3>
                <p>Fès, Morocco</p>
              </div>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/elmoussaoui4"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mehdi-el-moussaoui-91814933a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

            {status && <p className="status">{status}</p>}

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;