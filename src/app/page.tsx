"use client";

import { useState, useRef } from "react";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#0A66C2">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75a1.75 1.75 0 0 0-1.75 1.75c0 .97.78 1.76 1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg
      viewBox="-.067 -.068 1024.136 1024.068"
      width="18"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m454.878 321.736c-61.387 61.386-124.82 121.068-184.774 184.16-44.404 46.722-40.925 113.906 5.593 161.924 55.18 56.68 111.996 111.724 168.063 167.45 21.212 21.963 20.94 47.063 5.388 70.39-14.392 21.485-35.058 34.65-63.092 22.577a132.664 132.664 0 0 1 -35.672-25.578c-51.77-52.315-104.767-103.47-155.99-156.4-89.898-92.83-90.921-232.451-.478-324.668 127.07-129.867 256.05-257.688 384.484-386.054 28.307-28.306 63.843-30.148 87.033-6.002s21.008 55.657-6.411 84.509q-43.176 45.426-86.692 90.443c-30.693 47.609-71.823 84.645-117.453 117.249z"
        fill="#FFFFFF"
      />
      <path
        d="m677.029 641.015h-183.614c-40.925 0-70.186-24.76-69.504-58.113.614-32.262 27.966-55.998 68.208-56.135q187.025-.886 374.05 0c39.833 0 62.342 22.031 62.683 56.476 0 35.74-23.055 57.294-64.934 57.704-62.137.545-124.547.068-186.89.068z"
        fill="#B4B2B1"
      />
      <path
        d="m386.056 928.1c60.569-7.366 79.053-37.241 57.704-92.967 63.842 33.49 110.837 26.056 162.47-25.577 26.465-26.465 52.52-53.339 79.598-79.19s57.43-26.464 81.44-2.728 23.532 54.566-1.978 81.44c-34.104 35.195-67.457 70.595-103.47 103.266-76.94 69.777-199.917 75.915-275.764 15.756z"
        fill="#FFA116"
      />
      <path
        d="m454.878 321.736a1295.942 1295.942 0 0 1 117.452-117.249c89.693 27.829 142.349 101.152 202.372 164.926 19.575 20.871 11.663 53.747-10.777 72.777a53.338 53.338 0 0 1 -73.87-2.183 821.627 821.627 0 0 1 -74.413-74.278c-44.13-52.315-96.855-66.502-160.765-43.993z"
        fill="#FFA116"
      />
    </svg>
  );
}

function GeeksForGeeksIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#2F8D46">
      <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#EA4335">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

const socialProfiles = [
  {
    name: "GitHub",
    url: "https://github.com/ShivakumarSK2005",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shivakumar-kokatanur-259322324/",
    icon: LinkedinIcon,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/PES1UG23AM286/",
    icon: LeetCodeIcon,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/shivukokddyf?tab=activity",
    icon: GeeksForGeeksIcon,
  },
  {
    name: "Gmail",
    url: "mailto:shivukokatnur18@gmail.com",
    icon: GmailIcon,
  },
];

const projects = [
  {
    number: "01",
    title: "DeepFake Detection",
    description:
      "AI-based multimedia analysis system for detecting manipulated audio and video using deep learning.",
    portfolioDetails:
      "Developed a deepfake detection pipeline that analyzes spatial, temporal, and frequency-domain characteristics of multimedia content. The system uses CNN-based visual feature extraction, LSTM-based temporal modeling, and spectrogram-based audio analysis to classify potentially manipulated media.",
    tech: ["Python", "TensorFlow", "OpenCV", "LSTM", "CNN"],
    keyFeatures: [
      "Video frame extraction and preprocessing",
      "CNN-based spatial feature extraction",
      "Temporal sequence analysis using LSTM",
      "Audio preprocessing and spectrogram generation",
      "Audio-video feature analysis",
      "Deep learning-based classification",
    ],
    allTech: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Librosa",
      "NumPy",
      "CNN",
      "LSTM",
      "Deep Learning",
      "Spectrograms",
    ],
    github: "https://github.com/ShivakumarSK2005/Deep-Fake-Detection",
    demo: "#",
  },
  {
    number: "02",
    title: "URL Shortener",
    description:
      "Cloud-native URL shortening platform built with microservices, containerization, caching, and automated CI/CD.",
    portfolioDetails:
      "Designed and developed a cloud-native URL shortening system using separate authentication and URL services. The application uses PostgreSQL for persistent storage, Redis for caching, Nginx as an API gateway, and Docker/Kubernetes for containerized deployment and service orchestration.",
    tech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    keyFeatures: [
      "Microservices-based architecture",
      "Authentication and URL services",
      "RESTful APIs",
      "PostgreSQL persistent storage",
      "Redis caching",
      "Nginx API Gateway",
      "Docker containerization",
      "Kubernetes orchestration",
      "GitHub Actions CI/CD",
    ],
    allTech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Nginx",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Minikube",
      "GitHub Actions",
      "REST APIs",
      "Microservices Architecture",
    ],
    github: "https://github.com/ShivakumarSK2005/URL-Shortener",
    demo: "https://url-shortener-six-eosin.vercel.app/login",
  },
  {
    number: "03",
    title: "Skill Connect",
    description:
      "Full-stack skill discovery platform that connects users based on shared skills, interests, and learning goals.",
    portfolioDetails:
      "Developed a full-stack platform where users can create profiles, showcase their skills, discover relevant users, and build connections around shared interests and learning goals. Implemented REST APIs and database-driven user and skill management with a React-based frontend.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    keyFeatures: [
      "User profile management",
      "Skill and interest management",
      "Skill-based user discovery",
      "User connection workflow",
      "RESTful backend APIs",
      "Database-backed user and skill data",
      "Responsive frontend interface",
    ],
    allTech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
    github: "https://github.com/ShivakumarSK2005/Skill-Connect-",
    demo: "#",
  },
  {
    number: "04",
    title: "Job Application & Interview Tracker",
    description:
      "Enterprise full-stack career application tracker built with Spring Boot 3, React, JWT auth, MongoDB Atlas, and multi-round interview workflow management.",
    portfolioDetails:
      "Designed and developed a production-ready application tracking suite featuring stateless JWT security, end-to-end stage pipeline lifecycle management (Applied, Assessment, Interview, Offer, Rejected), dynamic server-side pagination, real-time funnel conversion metrics, and dedicated technical interview round scheduling with feedback reflections.",
    tech: ["Spring Boot", "React", "MongoDB Atlas", "JWT", "Docker", "Tailwind CSS"],
    keyFeatures: [
      "JWT-based Stateless Authentication & BCrypt encryption",
      "End-to-End Application Lifecycle Management (Active & Past)",
      "Dedicated Online Assessment (OA) scheduling & mistake reflections",
      "Multi-round interview scheduling with interviewer logs and feedback",
      "Dynamic search, filtering, server-side pagination, and pipeline analytics",
      "Dockerized deployment on Render with cloud MongoDB Atlas",
    ],
    allTech: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "MongoDB Atlas",
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Docker",
      "REST APIs",
      "Render",
      "Git",
    ],
    github: "https://github.com/ShivakumarSK2005/Job-Application-Tracker",
    demo: "https://job-application-tracker-1-u5tn.onrender.com/",
  },
];

const research = {
  number: "05",
  title: "Impact of Air Pollution on Neurodisorders",
  status: "Currently researching...",
  description:
    "Ongoing research project investigating the relationship between air pollution exposure and neurological disorders using data-driven analysis and machine learning techniques.",
  tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  allTech: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Machine Learning",
  ],
};

const codeSnippet = [
  'const developer = {',
  '  name: "Shivakumar",',
  '  role: "Full Stack Developer",',
  '',
  '  focus: [',
  '    "Backend Engineering",',
  '    "Full Stack Development",',
  '    "Data Structures & Algorithms",',
  '    "AI / Machine Learning"',
  '  ],',
  '',
  '  stack: [',
  '    "React",',
  '    "Spring Boot",',
  '    "Node.js",',
  '    "PostgreSQL",',
  '    "MongoDB"',
  '  ],',
  '',
  '  mindset: "Build. Learn. Improve."',
  '};',
].join("\n");

const techStack = [
  {
    category: "LANGUAGES",
    skills: ["Java", "C++", "JavaScript", "Python", "SQL"],
  },
  {
    category: "FRONTEND",
    skills: ["React", "Next.js", "Tailwind CSS", "Vite", "HTML", "CSS"],
  },
  {
    category: "BACKEND",
    skills: ["Spring Boot", "Spring Security", "JWT", "Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "DATABASES",
    skills: ["MongoDB Atlas", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "AI / ML",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Librosa",
      "Scikit-learn",
      "CNN",
      "LSTM",
    ],
  },
  {
    category: "DEVOPS & CLOUD",
    skills: ["Docker", "Render", "Vercel", "Git", "GitHub", "Maven", "Postman", "Kubernetes"],
  },
  {
    category: "CORE",
    skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [comingSoonProject, setComingSoonProject] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleViewProject = (title: string, projectNumber: string) => {
    setComingSoonProject(projectNumber);
    setToast(`${title} — Live demo coming soon!`);

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setComingSoonProject(null);
      setToast(null);
    }, 3000);
  };

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a
            href="#"
            className="mobile-brand"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#research" onClick={() => setMenuOpen(false)}>
              Research
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <div className="mobile-socials">
              {socialProfiles.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-link"
                  aria-label={item.name}
                  onClick={() => setMenuOpen(false)}
                >
                  <item.icon />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="nav-socials">
            {socialProfiles.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                title={item.name}
                className="nav-social-link"
                aria-label={item.name}
              >
                <item.icon />
              </a>
            ))}
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="terminal-label">
          <span className="green">●</span> available_for_opportunities
        </div>

        <p className="terminal-command">
          <span className="green">shivakumar@portfolio</span>:~$ whoami
        </p>

        <h1>
          Shivakumar
          <br />
          <span>Kokatanur</span>
        </h1>

        <h2>Full Stack Developer | C++ | Backend | AI/ML</h2>

        <p className="hero-description">
          Developer focused on building full-stack applications, backend
          systems, and AI-driven solutions, with a strong foundation in C++
          and Data Structures & Algorithms.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            ./view-projects
          </a>

          <a href="#contact" className="button secondary">
            ./contact-me
          </a>
        </div>

        <div className="hero-socials">
          <span className="hero-socials-label">connect:</span>
          <div className="hero-socials-list">
            {socialProfiles.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hero-social-pill"
                title={item.name}
              >
                <item.icon />
                <span>{item.name}</span>
                <span className="external-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="scroll-indicator">
          <span>↓</span> scroll to explore
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-header">
          <div className="section-header-title">
            <span className="section-number">01.</span>
            <h2>About Me</h2>
          </div>
          <div className="section-divider-line" />
        </div>

        <div className="about-grid">
          <div>
            <p>
              I'm a Full Stack Developer with a strong foundation in C++, OOP, SQL,
              Data Structures &amp; Algorithms, and Computer Science fundamentals.
              I focus on building practical, reliable software while developing a
              deeper understanding of backend engineering, databases, and system
              architecture.
            </p>

            <p>
              My experience includes Spring Boot, React, Next.js, Node.js, Express.js, MySQL,
              PostgreSQL, and MongoDB Atlas, along with hands-on work in Docker, Kubernetes,
              Nginx, Redis, and cloud-native architectures. I also explore AI and
              Machine Learning through deep learning projects and data-driven
              research. I enjoy solving challenging problems, learning new
              technologies, and turning ideas into well-engineered, real-world
              solutions.
            </p>
          </div>

          <div className="code-card">
            <div className="code-header">
              <span>developer.ts</span>
              <div className="mac-dots" aria-hidden="true">
                <span className="mac-dot mac-red" />
                <span className="mac-dot mac-yellow" />
                <span className="mac-dot mac-green" />
              </div>
            </div>

            <pre suppressHydrationWarning>
              <code suppressHydrationWarning>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-header">
          <div className="section-header-title">
            <span className="section-number">02.</span>
            <h2>Tech Stack</h2>
          </div>
          <div className="section-divider-line" />
        </div>

        <div className="tech-stack-container">
          {techStack.map((group) => (
            <div className="tech-stack-group" key={group.category}>
              <h3 className="tech-group-title">{group.category}</h3>
              <div className="tech-group-skills">
                {group.skills.map((skill, idx) => (
                  <span key={skill} className="tech-skill-item">
                    <span className="skill-text">{skill}</span>
                    {idx < group.skills.length - 1 && (
                      <span className="skill-separator">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-header">
          <div className="section-header-title">
            <span className="section-number">03.</span>
            <h2>Featured Projects</h2>
          </div>
          <div className="section-divider-line" />
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.number;

            return (
              <article className="project-card" key={project.title}>
                <div className="project-card-header">
                  <span className="project-card-num">{project.number}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>

                <p className="project-card-desc">{project.description}</p>

                {isExpanded && (
                  <div className="project-expanded-details">
                    <p className="project-full-desc">{project.portfolioDetails}</p>

                    {project.keyFeatures && (
                      <div className="project-features-block">
                        <span className="features-label">Key Features:</span>
                        <ul className="features-checklist">
                          {project.keyFeatures.map((item) => (
                            <li key={item}>
                              <span className="check-mark">✓</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="project-all-tech">
                      <span className="features-label">Full Stack:</span>
                      <div className="all-tech-tags">
                        {project.allTech.map((item) => (
                          <span key={item} className="all-tech-badge">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="project-tech-row">
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="details-toggle-btn"
                    onClick={() =>
                      setExpandedProject(isExpanded ? null : project.number)
                    }
                  >
                    {isExpanded ? "− less" : "+ details"}
                  </button>
                </div>

                <div className="project-card-footer">
                  <a
                    href={project.github}
                    className="project-link-gh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-view"
                    >
                      View Project ↗
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`project-link-view ${
                        comingSoonProject === project.number ? "coming-soon" : ""
                      }`}
                      onClick={() => handleViewProject(project.title, project.number)}
                    >
                      {comingSoonProject === project.number
                        ? "Coming Soon..."
                        : "View Project →"}
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="section research-section">
        <div className="section-header">
          <div className="section-header-title">
            <span className="section-number">{research.number}.</span>
            <h2>Research</h2>
          </div>
          <div className="section-divider-line" />
        </div>

        <article className="research-card">
          <div className="research-card-header">
            <div className="research-title-line">
              <span className="research-bullet">◉</span>
              <h3 className="research-title">{research.title}</h3>
            </div>
            <div className="research-status-badge">
              <span className="status-dot-pulse" />
              <span>{research.status}</span>
            </div>
          </div>

          <p className="research-desc">{research.description}</p>

          <div className="research-tech-row">
            {research.tech.map((tech, idx) => (
              <span key={tech} className="research-tech-item">
                {tech}
                {idx < research.tech.length - 1 && <span className="tech-separator">·</span>}
              </span>
            ))}
          </div>
        </article>
      </section>

      {/* WHAT I BRING */}
      <section id="what-i-bring" className="section">
        <div className="section-header">
          <div className="section-header-title">
            <span className="section-number">05.</span>
            <h2>What I Bring</h2>
          </div>
          <div className="section-divider-line" />
        </div>

        <div className="experience">
          <div className="experience-item">
            <div className="experience-number">01</div>

            <div>
              <h3>Full Stack Development</h3>
              <p>
                Building complete web applications with React, Next.js, Node.js,
                Express.js, and PostgreSQL, from responsive interfaces to backend
                APIs and data management.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-number">02</div>

            <div>
              <h3>Backend & System Thinking</h3>
              <p>
                Designing REST APIs, database schemas, authentication flows, and
                backend architectures with a focus on clean, maintainable, and
                reliable systems.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-number">03</div>

            <div>
              <h3>Problem Solving</h3>
              <p>
                Strong foundation in C++, Data Structures & Algorithms, and
                Object-Oriented Programming, with a focus on breaking complex
                problems into efficient solutions.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-number">04</div>

            <div>
              <h3>AI & Machine Learning</h3>
              <p>
                Exploring deep learning and data-driven solutions through
                projects involving CNNs, LSTMs, audio-video processing, and
                machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="terminal-label">
          <span className="green">●</span> let's_build_something
        </div>

        <h2>Let's work together.</h2>

        <p>
          I'm currently open to opportunities, collaborations and interesting
          projects.
        </p>

        <a href="mailto:shivukokatnur18@gmail.com" className="button primary">
          Send me an email
        </a>

        <div className="social-links">
          {socialProfiles.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="footer-social-link"
            >
              <item.icon />
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          Built with <span>Next.js</span> · Deployed on <span>Vercel</span>
        </p>

        <p suppressHydrationWarning>
          © {new Date().getFullYear()} Shivakumar Kokatanur · Last updated:{" "}
          <span>September 26, 2026</span>
        </p>
      </footer>

      {/* COMING SOON TOAST */}
      {toast && (
        <div className="terminal-toast" role="status">
          <span className="toast-dot">●</span>
          <span className="toast-text">{toast}</span>
          <button
            type="button"
            className="toast-close"
            onClick={() => setToast(null)}
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}