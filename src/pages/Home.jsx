import { useEffect, useState } from "react";
import { getPortfolio } from "../api.js";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolio()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div style={{ color: "var(--text-muted)", padding: "40px 6vw" }}>
        Loading...
      </div>
    );
  if (!data)
    return (
      <div style={{ color: "var(--text-muted)", padding: "40px 6vw" }}>
        Could not load portfolio.
      </div>
    );

  return (
    <>
      <Navbar name={data.name} />
      <Hero
        name={data.name}
        title={data.title}
        bio={data.bio}
        photoUrl={data.photoUrl}
        resumeUrl={data.resumeUrl}
      />
      <Stats stats={data.stats} />
      <About bio={data.bio} skills={data.skills} />
      <Projects projects={data.projects} />
      <Contact />
      <Footer
        name={data.name}
        github={data.github}
        linkedin={data.linkedin}
        email={data.email}
      />
    </>
  );
}
