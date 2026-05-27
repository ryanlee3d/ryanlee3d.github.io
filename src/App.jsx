import { useEffect, useState } from 'react'
import festaItaliaImage from './assets/festa-italia.png'
import './App.css'

const githubProfileHref = 'https://github.com/ryanlee3d'
const roboRockHref = 'https://github.com/ryanlee3d/RoboRock-Public'
const figmaPortfolioHref =
  'https://www.figma.com/design/qLs5VopRlz3QFiZA0PCD3D/Ryan-Lee-Portfolio?node-id=11-95&t=DAwoGbEOS7nsJkof-1'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const snapshots = [
  {
    title: 'Live Full-Stack App',
    tech: 'React - Supabase - PostgreSQL',
  },
  {
    title: 'Interactive Data Project',
    tech: 'Python - Pandas - JavaScript',
  },
  {
    title: '3D FPS Game Development',
    tech: 'Java - OpenGL',
  },
]

const secondaryProjects = [
  {
    title: 'Behind the Opioid Epidemic',
    type: 'Interactive Data Visualization',
    tech: 'Python | Pandas | JavaScript | D3.js | ObservableHQ',
    description:
      'Cleaned, transformed, and visualized large DEA ARCOS opioid distribution data to explore county-level patterns.',
    actions: [
      { label: 'Live Project', href: 'https://observablehq.com/d/01dd3ed1e35b826e' },
      {
        label: 'YouTube Presentation',
        href: 'https://www.youtube.com/watch?v=hKYrCJEZzZc',
      },
    ],
  },
  {
    title: '3D First Person Shooter Game Development',
    type: 'Game Architecture',
    tech: 'Java | OpenGL | Blender | TAGE',
    description:
      'Designed modular game using TAGE game engine. Managed assets such as animated objects, textures, 3D sounds, terrain height maps, and skyboxes.',
    actions: [{ label: 'ryanlee3d/RoboRock-Public', href: roboRockHref }],
  },
]

const skillGroups = [
  {
    title: 'Frontend:',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'D3.js', 'Figma'],
  },
  {
    title: 'Backend:',
    items: [
      'Supabase',
      'PostgreSQL',
      'SQL',
      'RESTful APIs',
      'TypeScript',
      'Cloud Functions',
    ],
  },
  {
    title: 'Languages:',
    items: ['Java', 'C++', 'Python', 'JavaScript', 'C', 'Shell Scripting'],
  },
  {
    title: 'Tools:',
    items: ['Git', 'GitHub', 'Docker', 'Jira', 'VS Code', 'Codex'],
  },
  {
    title: 'Data Graphics:',
    items: ['Pandas', 'Tableau', 'Observable HQ', 'Data Aggregation', 'Data Cleaning', 'Interactive'],
  },
  {
    title: 'Learning:',
    items: ['Angular', 'Vue.js', 'Node.js', 'Laravel', 'AWS', 'Claude Code'],
  },
]

const focusAreas = [
  {
    title: 'Full-stack web apps:',
    text: 'React, Supabase, PostgreSQL, user workflows',
  },
  {
    title: 'Data-driven tools:',
    text: 'Python, Pandas, SQL, visual storytelling',
  },
  {
    title: 'Team-based development:',
    text: 'Jira, documentation, debugging, communication',
  },
]

const contactLinks = [
  { label: 'Email Me', href: 'mailto:ryanplee0327@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryan-lee-56986b242/' },
  { label: 'GitHub', href: githubProfileHref },
]

const getLinkProps = (href) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    let animationFrameId = 0

    const updateBackgroundPosition = () => {
      document.documentElement.style.setProperty(
        '--scroll-offset',
        `${window.scrollY * -0.18}px`,
      )
      animationFrameId = 0
    }

    const handleScroll = () => {
      if (animationFrameId === 0) {
        animationFrameId = window.requestAnimationFrame(updateBackgroundPosition)
      }
    }

    updateBackgroundPosition()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameId !== 0) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand" href="#top" onClick={closeMenu}>
            Ryan Lee
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            Menu
          </button>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} {...getLinkProps(item.href)}>
                {item.label}
              </a>
            ))}
          </div>

          <div
            className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
            id="mobile-menu"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                {...getLinkProps(item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="page-shell" id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Ryan Lee</h1>
            <p className="hero-role">Full-Stack Developer</p>
            <p className="hero-summary">
              Recent Computer Science graduate focused on building practical web
              applications, data-driven tools, and user-friendly software.
            </p>
            <div className="button-row">
              <a className="button-link" href="#projects">
                View Projects
              </a>
            </div>
          </div>

          <aside className="snapshot-card" aria-label="Project snapshot">
            <h2>Project Snapshot</h2>
            <p>A quick look at the work I've been building.</p>
            <div className="snapshot-list">
              {snapshots.map((snapshot) => (
                <div className="snapshot-item" key={snapshot.title}>
                  <strong>{snapshot.title}</strong>
                  <span>{snapshot.tech}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-heading">
            <h2>Featured Projects</h2>
            <p>
              A few projects that show my full-stack, data, and software
              development work.
            </p>
          </div>

          <div className="projects-grid">
            <article className="project-card featured-project">
              <div className="featured-intro">
                <h3>Festa Italia Website</h3>
                <p className="project-type">Live Deployed Full-Stack App</p>
                <p className="project-tech">
                  React | Supabase | PostgreSQL | Authentication | Jira/SCRUM
                </p>
              </div>

              <figure className="project-media">
                <img
                  src={festaItaliaImage}
                  alt="Festa Italia website homepage"
                />
              </figure>

              <div className="featured-details">
                <p>
                  Built and deployed a web application supporting ticket sales,
                  food sales, bocce tournament management, and volunteer signups
                  for event organization.
                </p>
                <p>
                  My role: frontend development, backend workflow,
                  documentation, Jira task organization, and team coordination.
                </p>
                <div className="button-row">
                  <a
                    className="button-link"
                    href="https://festaitaliamonterey.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </article>

            {secondaryProjects.map((project) => (
              <article className="project-card compact-project" key={project.title}>
                <h3>{project.title}</h3>
                <p className="project-type">{project.type}</p>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
                <div className="button-row">
                  {project.actions.map((action) => (
                    <a
                      className="button-link"
                      href={action.href}
                      key={action.label}
                      {...getLinkProps(action.href)}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-heading">
            <h2>Skills</h2>
            <p>
              Technologies and tools I've used across full-stack, data, and
              software projects.
            </p>
          </div>

          <div className="skills-panel">
            {skillGroups.map((group, index) => (
              <article
                className={`skill-card ${group.className ?? ''} items-${group.items.length}`}
                key={`${group.title}-${index}`}
              >
                <h3>
                  {group.className === 'is-data' ? (
                    <>
                      <span>Data</span>
                      <span>Visualization:</span>
                    </>
                  ) : (
                    group.title
                  )}
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-heading">
            <h2>About</h2>
            <p>A little about how I work and what I'm looking for.</p>
          </div>

          <div className="about-card">
            <div className="about-copy">
              <p>
                I recently completed my Bachelors Degree in Computer Science at
                California State University, Sacramento. I enjoy full-stack
                development because it combines problem solving, user
                experience, databases, and real-world workflows.
              </p>
              <p>
                I'm early in my professional career, but I'm curious, coachable,
                and motivated to keep improving as a developer. I enjoy
                team-based projects, clear communication, and building 
                tools that make work life easier.
              </p>
            </div>

            <aside className="focus-card" aria-label="Areas of focus">
              <h3>Areas of Focus:</h3>
              {focusAreas.map((area) => (
                <p key={area.title}>
                  <strong>{area.title}</strong>
                  <span>{area.text}</span>
                </p>
              ))}
            </aside>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-heading">
            <h2>Contact</h2>
            <p>
              I'm currently looking for entry-level full-stack, web application
              developer, and software developer roles.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-actions">
              {contactLinks.map((link) => (
                <a
                  className="button-link"
                  href={link.href}
                  key={link.label}
                  {...getLinkProps(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p>
              Interested in working together or learning more about my projects?
              Feel free to reach out.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Built by Ryan Lee | React Portfolio | Designed in{' '}
          <a href={figmaPortfolioHref} {...getLinkProps(figmaPortfolioHref)}>
            Figma
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
