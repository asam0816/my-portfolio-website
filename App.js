import React from "react";
import "./App.css";
import profileImage from "./asam.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">ASAM KM.</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Mohamed Asam</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p>
            I’m a Full Stack Developer currently following BSc in Software Enginnering at KIU CAMPUS.
            On the front-end, I’ve mastered React.js and CSS,
            creating responsive and dynamic user interfaces.
          </p>

          <div className="buttons">
            <button className="btn btn-primary">Hire me</button>
            <button className="btn btn-secondary">Let's talk</button>
          </div>


          
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/mohammed-asam-229967290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
             {/* GitHub Icon */}
  <a
    href="https://github.com/account"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faGithub} size="1x" />
  </a>
          </div>
        </div>

        

        <div className="hero-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </section>


<section id="about" className="about">
  <div className="about-header">
    <h2>
      About <span className="highlight">Me </span> 
    </h2>
  </div>
  <div className="about-container">
    <div className="about-image">
      <img src={profileImage} alt="Profile" />
    </div>
    <div className="about-text">
      <h3>Full Stack Developer</h3>
      <p>
      I’m a Full Stack Developer currently following BSc in Software Enginnering at KAATSU INTERNATIONAL UNIVERSITY.
            On the front-end, I’ve mastered React.js and CSS,
            creating responsive and dynamic user interfaces. As I continue my journey, I’m diving deeper 
        into back-end technologies to build comprehensive, full-stack applications. 
        Stay tuned as I continue to expand my skill set and bring innovative ideas to life!
      </p>
    </div>
  </div>
</section>

<section id="skills" className="skills-section">
      <h2 className="skills-title">
        My <span className="highlight">Skills</span>
      </h2>

      <div className="skills-container">
        {/* Left Column */}
        <div className="skills-column">
          <div className="skill">
            <span className="skill-name">HTML</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "90%" }}></div>
            </div>
            <span className="skill-percent">90%</span>
          </div>

          <div className="skill">
            <span className="skill-name">CSS</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "80%" }}></div>
            </div>
            <span className="skill-percent">80%</span>
          </div>

          <div className="skill">
            <span className="skill-name">TypeScript</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "92%" }}></div>
            </div>
            <span className="skill-percent">92%</span>
          </div>

          <div className="skill">
            <span className="skill-name">Python</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "83%" }}></div>
            </div>
            <span className="skill-percent">83%</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="skills-column">
          <div className="skill">
            <span className="skill-name">Next.JS</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "95%" }}></div>
            </div>
            <span className="skill-percent">95%</span>
          </div>

          <div className="skill">
            <span className="skill-name">Tailwind CSS</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "85%" }}></div>
            </div>
            <span className="skill-percent">85%</span>
          </div>

          <div className="skill">
            <span className="skill-name">Express</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "82%" }}></div>
            </div>
            <span className="skill-percent">82%</span>
          </div>

          <div className="skill">
            <span className="skill-name">Node Js</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: "83%" }}></div>
            </div>
            <span className="skill-percent">83%</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="contact-section">
  <h2 className="contact-title">
    Contact <span className="highlight">Me!</span>
  </h2>

  <div className="contact-form">
    <form>
      <div className="form-group">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className="form-group">
        <input type="tel" placeholder="Mobile Number" required />
        <input type="text" placeholder="Email Subject" required />
      </div>
      <div className="form-group">
        <textarea placeholder="Your Message" rows="5" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  </div>
</section>


    </div>
  );
}

export default App;
