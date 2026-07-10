function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
      </div>

      <div className="card-grid">
        <article className="card">
          <h3>Spotify Unwrapped</h3>
          <p>
            A Spotify listening analytics project that helps users explore their
            music habits through personalized statistics, visualizations, and
            insights.
          </p>
          <p className="card-meta">React · TypeScript · Data Visualization</p>
        </article>

        <article className="card">
          <h3>Finennse</h3>
          <p>
            A financial literacy game designed to help children learn basic
            money concepts through interactive decisions, rewards, and simple
            real-world scenarios.
          </p>
          <p className="card-meta">Game Design · UI/UX · Education Tech</p>
        </article>

        <article className="card">
          <h3>Workly</h3>
          <p>
            A campus engagement platform concept that helps students discover
            opportunities, events, clubs, and projects in one centralized place.
          </p>
          <p className="card-meta">Product Design · React · User Experience</p>
        </article>
      </div>
    </section>
  );
}

export default Projects;