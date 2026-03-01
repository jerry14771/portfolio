'use client';
import React, { useState, useEffect } from 'react'
import './app.css'
import ScrollTech from './ScrollTech';
import Marquee from "react-fast-marquee";

// ─── SHARED STYLES ───────────────────────────────────────────────
const G = "#14e956";
const G_DIM = "rgba(20,233,88,0.157)";
const G_BORDER = "rgba(20,233,88,0.35)";
const FONT = "Livik-Medium";

const pillStyle = {
  backgroundColor: G_DIM,
  borderRadius: 12,
  color: G,
  fontWeight: "900",
  letterSpacing: 5,
  padding: "8px 20px",
  fontFamily: FONT,
  display: "inline-block",
};

const sectionStyle = {
  padding: "60px 20px",
  borderTop: `1px solid ${G_BORDER}`,
};

const cardStyle = {
  backgroundColor: "rgba(0,0,0,0.55)",
  border: `1px solid ${G_BORDER}`,
  borderRadius: 16,
  padding: 24,
  backdropFilter: "blur(6px)",
};

// ─── DATA ────────────────────────────────────────────────────────

const projects = [
  {
    title: "Startup Launch App",
    desc: "End-to-end Android & web app for a fintech startup. React Native + Node.js backend with real-time notifications.",
    tags: ["React Native", "Node.js", "Firebase"],
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack marketplace with payment integration, vendor dashboards and admin panel.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    desc: "Analytics dashboard with live charts, scheduling and multi-account management.",
    tags: ["React", "Chart.js", "REST APIs"],
    link: "#",
  },
  {
    title: "Portfolio CMS",
    desc: "Custom headless CMS with drag-and-drop page builder for creative agencies.",
    tags: ["Next.js", "Sanity.io", "Tailwind"],
    link: "#",
  },
];

const experiences = [
  {
    company: "Veniso Solutions",
    role: "Software Developer",
    period: "Jan 2025 – Present",
    points: [
      "Develop and maintain RESTful APIs using Core PHP and MySQL for web and mobile applications",
      "Debug and enhance legacy PHP codebase, improving stability and reducing production issues",
      "Contributed to OTT platform backend integration with Android TV–based systems and third-party aggregators",
    ],
  },
  {
    company: "WebMasters Infotech",
    role: "React Native and Laravel Developer",
    period: "Aug 2022 – Dec 2024",
    points: [
      "Built full-stack features using Laravel (backend) and React Native (mobile apps).",
      "Developed REST APIs in Laravel and integrated them with cross-platform mobile applications.",
      "Implemented payment gateway integrations and third-party APIs.",
    ],
  }
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "JNTU, Hyderabad",
    year: "2015 – 2019",
    detail: "",
  }
];

// ─── COMPONENTS ──────────────────────────────────────────────────

function SectionHeading({ text }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
      <p style={{ ...pillStyle, fontSize: 22, textAlign: "center" }}>{text}</p>
    </div>
  );
}

function ProjectCard({ title, desc, tags, link }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...cardStyle,
        flex: "1 1 280px",
        maxWidth: 340,
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? `0 0 24px ${G_BORDER}` : "none",
        cursor: "pointer",
      }}
    >
      <h3 style={{ color: G, fontFamily: FONT, fontSize: 20, margin: "0 0 10px" }}>{title}</h3>
      <p style={{ color: "#ccc", fontFamily: FONT, fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>{desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        {tags.map(t => (
          <span key={t} style={{ backgroundColor: G_DIM, color: G, borderRadius: 8, padding: "2px 10px", fontSize: 12, fontFamily: FONT }}>{t}</span>
        ))}
      </div>
      <a href={link} style={{ color: G, fontFamily: FONT, fontSize: 13, textDecoration: "none", borderBottom: `1px solid ${G}` }}>View Project →</a>
    </div>
  );
}

function ExpCard({ company, role, period, points }) {
  return (
    <div style={{ ...cardStyle, marginBottom: 20, position: "relative", paddingLeft: 32 }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, backgroundColor: G, borderRadius: "16px 0 0 16px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
        <div>
          <h3 style={{ color: G, fontFamily: FONT, margin: 0, fontSize: 18 }}>{role}</h3>
          <p style={{ color: "#aaa", fontFamily: FONT, margin: "4px 0 0", fontSize: 14 }}>{company}</p>
        </div>
        <span style={{ ...pillStyle, fontSize: 12, letterSpacing: 2, alignSelf: "flex-start" }}>{period}</span>
      </div>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {points.map((p, i) => (
          <li key={i} style={{ color: "#ccc", fontFamily: FONT, fontSize: 14, lineHeight: 1.8 }}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function EduCard({ degree, school, year, detail }) {
  return (
    <div style={{ ...cardStyle, marginBottom: 16, display: "flex", gap: 20, alignItems: "flex-start" }}>
      <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: G_DIM, border: `1px solid ${G_BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontSize: 22 }}>🎓</span>
      </div>
      <div>
        <h3 style={{ color: G, fontFamily: FONT, margin: "0 0 4px", fontSize: 17 }}>{degree}</h3>
        <p style={{ color: "#aaa", fontFamily: FONT, margin: "0 0 4px", fontSize: 14 }}>{school} · {year}</p>
        <p style={{ color: "#ccc", fontFamily: FONT, margin: 0, fontSize: 13 }}>{detail}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    border: `1px solid ${G_BORDER}`,
    borderRadius: 10,
    padding: "12px 16px",
    color: "#fff",
    fontFamily: FONT,
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    marginBottom: 16,
  };

  return (
    <div style={{ ...cardStyle, maxWidth: 560, margin: "0 auto" }}>
      {sent ? (
        <p style={{ color: G, fontFamily: FONT, textAlign: "center", fontSize: 18 }}>✅ Message sent! I'll get back to you soon.</p>
      ) : (
        <>
          <input
            name="name" value={form.name} onChange={handleChange}
            placeholder="Your Name" style={inputStyle}
          />
          <input
            name="email" value={form.email} onChange={handleChange}
            placeholder="Your Email" style={inputStyle}
          />
          <textarea
            name="message" value={form.message} onChange={handleChange}
            placeholder="Your Message" rows={5}
            style={{ ...inputStyle, resize: "vertical" }}
          />
          <button
            onClick={handleSubmit}
            style={{
              width: "100%", backgroundColor: G, color: "#000",
              border: "none", borderRadius: 10, padding: "13px 0",
              fontFamily: FONT, fontSize: 16, fontWeight: "900",
              letterSpacing: 3, cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.target.style.opacity = 0.85}
            onMouseLeave={e => e.target.style.opacity = 1}
          >
            SEND MESSAGE
          </button>
        </>
      )}
    </div>
  );
}

// ─── HAMBURGER ICON ──────────────────────────────────────────────
function HamburgerIcon({ open }) {
  const barStyle = (rotation, translateY, opacity = 1) => ({
    display: "block",
    width: 24,
    height: 2,
    backgroundColor: G,
    borderRadius: 2,
    transition: "all 0.3s ease",
    transform: rotation,
    opacity,
    marginBottom: 5,
  });

  return (
    <div style={{ width: 24, cursor: "pointer" }}>
      <span style={barStyle(open ? "rotate(45deg) translate(5px, 5px)" : "none")} />
      <span style={barStyle("none", "none", open ? 0 : 1)} />
      <span style={barStyle(open ? "rotate(-45deg) translate(5px, -5px)" : "none")} />
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close menu on nav link click
  const handleNavClick = () => setMenuOpen(false);

  const bgStyle = {
    backgroundImage: 'url("/assets/green-space-7fwm57jdldylfq0b.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
  };

  const navLinks = ["About", "Projects", "Experience", "Education", "Contact"];

  return (
    <div style={{ ...bgStyle, minHeight: "100vh", color: "#fff" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        backgroundColor: scrolled || menuOpen ? "rgba(0,0,0,0.92)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${G_BORDER}` : "none",
        transition: "all 0.3s",
        padding: "0 20px",
      }}>
        {/* Top bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64,
        }}>
          <img src="/assets/giphy.gif" alt="Logo" height={50} width={68} style={{ borderRadius: 5, padding: 4 }} />

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {navLinks.map(l => (
                <a
                  key={l} href={`#${l.toLowerCase()}`}
                  style={{ color: "#ccc", fontFamily: FONT, fontSize: 14, letterSpacing: 2, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = G}
                  onMouseLeave={e => e.target.style.color = "#ccc"}
                >
                  {l.toUpperCase()}
                </a>
              ))}
            </div>
          )}

          {/* Desktop HIRE ME / Mobile hamburger */}
          {!isMobile ? (
            <a
              href="#contact"
              style={{
                backgroundColor: G, color: "#000", borderRadius: 10,
                padding: "8px 20px", fontFamily: FONT, fontSize: 13,
                fontWeight: "900", letterSpacing: 2, textDecoration: "none",
              }}
            >
              HIRE ME
            </a>
          ) : (
            <div onClick={() => setMenuOpen(o => !o)} style={{ padding: 8 }}>
              <HamburgerIcon open={menuOpen} />
            </div>
          )}
        </div>

        {/* Mobile dropdown menu */}
        {isMobile && (
          <div style={{
            maxHeight: menuOpen ? 400 : 0,
            overflow: "hidden",
            transition: "max-height 0.35s ease",
          }}>
            <div style={{
              display: "flex", flexDirection: "column", gap: 0,
              paddingBottom: menuOpen ? 16 : 0,
              borderTop: menuOpen ? `1px solid ${G_BORDER}` : "none",
            }}>
              {navLinks.map(l => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={handleNavClick}
                  style={{
                    color: "#ccc", fontFamily: FONT, fontSize: 15,
                    letterSpacing: 3, textDecoration: "none",
                    padding: "14px 4px",
                    borderBottom: `1px solid rgba(20,233,88,0.1)`,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.target.style.color = G}
                  onMouseLeave={e => e.target.style.color = "#ccc"}
                >
                  {l.toUpperCase()}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                style={{
                  backgroundColor: G, color: "#000", borderRadius: 10,
                  padding: "12px 20px", fontFamily: FONT, fontSize: 14,
                  fontWeight: "900", letterSpacing: 2, textDecoration: "none",
                  textAlign: "center", marginTop: 12,
                }}
              >
                HIRE ME
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="about" style={{ padding: isMobile ? "40px 20px 40px" : "60px 20px 40px" }}>
        <div style={{
          display: 'flex',
          justifyContent: isMobile ? "center" : "space-around",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          flexWrap: "wrap",
          gap: isMobile ? 32 : 20,
        }}>
          {/* Left: Text content */}
          <div style={{ width: isMobile ? "100%" : "42%", minWidth: isMobile ? "unset" : 280, textAlign: isMobile ? "center" : "left" }}>
            <img
              src='/assets/giphy2.gif'
              height={isMobile ? 220 : 360}
              width={isMobile ? 132 : 216}
              style={{ borderRadius: 12 }}
            />
            <p style={{ ...pillStyle, fontSize: isMobile ? 16 : 20, marginTop: 16 }}>Hello, I'm Rohit Raj</p>

            <div style={{
              display: 'flex',
              flexWrap: "wrap",
              gap: 6,
              alignItems: "center",
              marginTop: 16,
              justifyContent: isMobile ? "center" : "flex-start",
            }}>
              {[
                ["A", false],
                ["Full-Stack Android", true],
                ["and", false],
                ["Web Developer", true],
                [". I Help Startups", false],
                ["Launch", true],
                ["And", false],
                ["Grow", true],
                ["Their Products", false],
              ].map(([word, accent], i) => (
                <span key={i} style={{
                  fontSize: accent ? (isMobile ? "1.6em" : "2.5em") : (isMobile ? "1.3em" : "2em"),
                  fontFamily: FONT,
                  color: accent ? G : "#fff",
                }}>
                  {word}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{
              display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
            }}>
              <a
                href="#contact"
                style={{
                  backgroundColor: G, color: "#000", borderRadius: 10,
                  padding: "12px 28px", fontFamily: FONT, fontWeight: "900",
                  fontSize: 15, letterSpacing: 2, textDecoration: "none",
                }}
              >
                HIRE ME
              </a>
              <a
                href="#projects"
                style={{
                  backgroundColor: "transparent", color: G,
                  border: `2px solid ${G}`, borderRadius: 10,
                  padding: "12px 28px", fontFamily: FONT, fontWeight: "900",
                  fontSize: 15, letterSpacing: 2, textDecoration: "none",
                }}
              >
                MY WORK
              </a>
            </div>

            {/* Quick stats */}
            <div style={{
              display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
            }}>
              {[["3+", "Years Exp."], ["15+", "Projects"], ["10k+", "Users Reached"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <p style={{ color: G, fontFamily: FONT, fontSize: 26, fontWeight: "900", margin: 0 }}>{num}</p>
                  <p style={{ color: "#aaa", fontFamily: FONT, fontSize: 12, letterSpacing: 2, margin: 0 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile image — hidden on mobile */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/assets/bg.png" height={580} width={580} style={{ borderRadius: 16 }} />
            </div>
          )}
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ ...sectionStyle }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <p style={{ ...pillStyle, fontSize: isMobile ? 16 : 22, textAlign: "center", letterSpacing: isMobile ? 2 : 5 }}>Technology I Have Worked On</p>
        </div>
        <div style={{ display: 'flex', justifyContent: "center", padding: "10px 0 20px" }}>
          <div style={{ width: "100%" }}>
            <Marquee style={{ gap: "70px" }}>
              <ScrollTech />
            </Marquee>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={sectionStyle}>
        <SectionHeading text="My Projects" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", maxWidth: 1100, margin: "0 auto" }}>
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href="#"
            style={{
              border: `2px solid ${G}`, color: G, borderRadius: 10,
              padding: "12px 32px", fontFamily: FONT, fontSize: 14,
              fontWeight: "900", letterSpacing: 3, textDecoration: "none",
            }}
          >
            VIEW ALL ON GITHUB →
          </a>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={sectionStyle}>
        <SectionHeading text="Work Experience" />
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {experiences.map(e => <ExpCard key={e.company} {...e} />)}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={sectionStyle}>
        <SectionHeading text="Education" />
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {education.map(e => <EduCard key={e.school} {...e} />)}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={sectionStyle}>
        <SectionHeading text="Get In Touch" />
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{ color: "#aaa", fontFamily: FONT, fontSize: 15, letterSpacing: 1 }}>
            Open for freelance projects, full-time roles & startup collaborations.
          </p>
        </div>
        <ContactForm />

        {/* Social links */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
          {[
            ["GitHub", "https://github.com"],
            ["LinkedIn", "https://linkedin.com"],
            ["Twitter / X", "https://twitter.com"],
            ["Email", "mailto:rohit@example.com"],
          ].map(([label, href]) => (
            <a
              key={label} href={href}
              style={{ color: "#aaa", fontFamily: FONT, fontSize: 13, letterSpacing: 2, textDecoration: "none", borderBottom: `1px solid transparent`, transition: "all 0.2s" }}
              onMouseEnter={e => { e.target.style.color = G; e.target.style.borderBottomColor = G; }}
              onMouseLeave={e => { e.target.style.color = "#aaa"; e.target.style.borderBottomColor = "transparent"; }}
            >
              {label.toUpperCase()}
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: `1px solid ${G_BORDER}`,
        padding: "20px",
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}>
        <p style={{ color: "#555", fontFamily: FONT, fontSize: 12, letterSpacing: 2, margin: 0 }}>
          © {new Date().getFullYear()} ROHIT RAJ · BUILT WITH ❤️ &amp; NEXT
        </p>
      </footer>

    </div>
  );
}

export default App;
