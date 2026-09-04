import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';

const researchAreas = [
  {
    number: '01',
    title: 'Agentic Systems',
    text: 'Agent-based architectures that reason about placement, admission, and feedback across complex infrastructure.',
    tags: ['AI agents', 'Reinforcement learning', 'Adaptive systems'],
  },
  {
    number: '02',
    title: 'Federated Learning',
    text: 'System-aware learning frameworks for heterogeneous clients, overlapping data, and energy-conscious optimization.',
    tags: ['Client selection', 'Privacy', 'Sustainable AI'],
  },
  {
    number: '03',
    title: 'Intelligent Data Systems',
    text: 'Learning-guided storage, caching, prefetching, and near-data processing for data-intensive AI workloads.',
    tags: ['Distributed storage', 'Caching', 'Near-data processing'],
  },
];

const publications = [
  {
    year: '2026',
    type: 'Under Review',
    title: 'TierPilot: A Unified Learning Framework for Data Placement in Distributed Storage Systems',
    authors: 'Shiyue Hou, Pavana Prakash, Rolando Pablo Hong Enriquez, Alex Veprinsky, Dejan Milojicic, Ningfang Mi',
    venue: 'Under review',
  },
  {
    year: '2026',
    type: 'Under Review',
    title: 'FedEcoStream: Energy-Aware Federated Learning with Stream-Based Prefetching for Distributed Storage Optimization',
    authors: 'Shiyue Hou, Pavana Prakash, Rolando Pablo Hong Enriquez, Alex Veprinsky, Dejan Milojicic, Ningfang Mi',
    venue: 'Under review',
  },
  {
    year: '2025',
    type: 'Publication',
    title: 'Carbon Friendly Federated Learning Framework for Optimized Distributed Storage Systems',
    authors: 'Shiyue Hou, Pavana Prakash, Rolando Pablo Hong Enriquez, Ningfang Mi, Alex Veprinsky, Dejan Milojicic',
    venue: 'ACM SIGMETRICS Performance Evaluation Review',
    href: 'https://dl.acm.org/doi/10.1145/3764944.3764958',
  },
  {
    year: '2025',
    type: 'Publication',
    title: 'PECO: Probabilistic Evaluation-based Client Selection for Federated Learning with Overlapping Clients',
    authors: 'Allen Yang, Shiyue Hou, Yiming Xie, Bo Sheng, Ningfang Mi',
    venue: 'IEEE HPCC',
    href: 'https://www.cs.umb.edu/~shengbo/paper/hpcc25.pdf',
  },
  {
    year: '2025',
    type: 'Preprint',
    title: 'Enabling Flexible Multi-LLM Integration for Scalable Knowledge Aggregation',
    authors: 'Zhenglun Kong, Zheng Zhan, Shiyue Hou, et al.',
    venue: 'arXiv:2505.23844',
    href: 'https://arxiv.org/abs/2505.23844',
  },
  {
    year: '2024',
    type: 'Publication',
    title: 'FedLDCS: Adaptive Divergence-Based Client Selection for Federated Learning',
    authors: 'Shiyue Hou, Zhenglun Kong',
    venue: 'FedKDD Workshop',
    href: 'https://openreview.net/forum?id=pNZ0fQ5tDV',
  },
  {
    year: '2024',
    type: 'Publication',
    title: 'Performance Analysis of Data Processing in Distributed File Systems with Near Data Processing',
    authors: 'Shiyue Hou, Nathan R. Tallent, Li Wang, Ningfang Mi',
    venue: 'IEEE ISNCC',
    href: 'https://par.nsf.gov/biblio/10589508',
  },
];

const experience = [
  {
    period: '2024 — Present', company: 'Hewlett Packard Labs', role: 'Research Associate Intern', location: 'Milpitas, California',
    detail: 'Agent-based data placement, graph learning for storage prefetching, and carbon-aware federated learning for distributed systems.',
  },
  {
    period: '2023 — 2025', company: 'Pacific Northwest National Laboratory', role: 'Visiting Researcher', location: 'Richland, Washington',
    detail: 'Near-data processing on Ceph and data-movement-aware ML pipelines with Apache Arrow, Parquet, and DuckDB.',
  },
  {
    period: 'Summer 2022', company: 'NetApp', role: 'System Performance Intern', location: 'San Jose, California',
    detail: 'Scalable performance testing, telemetry, and ML-based anomaly detection for ONTAP replication systems.',
  },
  {
    period: '2020 — 2021', company: 'Bilibili Group', role: 'Senior Software Engineer', location: 'Shanghai, China',
    detail: 'Cross-platform applications and data integration systems for Windows, Surface, Xbox, Android, and iOS.',
  },
  {
    period: '2018 — 2020', company: 'Intel Corporation', role: 'Software Engineer', location: 'Dalian, China',
    detail: 'Data analytics, visualization, and multi-threaded pipelines for 3D NAND manufacturing systems.',
  },
];

function App() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Home">SH</a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#research">Research</a>
          <a href="#publications">Publications</a><a href="#experience">Experience</a>
        </div>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Computer Engineering · AI &amp; Data Systems</p>
          <h1>Shiyue <span>(Jason)</span> Hou</h1>
          <p className="hero-role">Ph.D. Candidate at Northeastern University</p>
          <p className="hero-lede">I build intelligent, efficient systems at the intersection of AI agents, federated learning, and distributed data infrastructure.</p>
          <div className="social-links" aria-label="Profile links">
            <a href="mailto:shiyuehou1@gmail.com" aria-label="Email"><Mail size={19} /></a>
            <a href="https://scholar.google.com/citations?user=dxJUfNAAAAAJ&hl=en" aria-label="Google Scholar"><GraduationCap size={20} /></a>
            <a className="social-text" href="https://github.com/shou123" aria-label="GitHub">GH</a>
            <a className="social-text" href="https://www.linkedin.com/in/shiyuehou/" aria-label="LinkedIn">in</a>
            <a className="cv-link" href="./Shiyue_Hou_Resume.pdf">CV</a>
          </div>
        </div>
        <figure className="portrait-wrap">
          <img src="./shiyue-hou-yosemite.jpg" alt="Shiyue Hou at Yosemite National Park" />
          <figcaption>Yosemite National Park</figcaption>
        </figure>
        <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><ArrowDown size={18} /></a>
      </section>

      <section className="about section-shell split-section" id="about">
        <p className="section-kicker">01 / About</p>
        <div className="section-body about-body">
          <h2>Designing learning systems that work in the real world.</h2>
          <div className="about-grid">
            <p>I am a Ph.D. candidate in Computer Engineering at Northeastern University. My work connects machine learning with the realities of large-scale systems: limited data movement, heterogeneous infrastructure, energy constraints, and workloads that change over time.</p>
            <p>I have developed end-to-end systems across research labs and industry, from intelligent storage and near-data processing to adaptive caching and federated learning. I care about ideas that are rigorous, deployable, and useful.</p>
          </div>
          <div className="status-note"><span /> Currently based in the Boston area</div>
        </div>
      </section>

      <section className="research section-shell split-section" id="research">
        <p className="section-kicker">02 / Research</p>
        <div className="section-body">
          <div className="section-heading-row"><h2>Research interests</h2><p>Learning systems that adapt to infrastructure, not just datasets.</p></div>
          <div className="research-grid">
            {researchAreas.map((area) => (
              <article className="research-card" key={area.number}>
                <span className="card-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p>
                <ul>{area.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="publications section-shell split-section" id="publications">
        <p className="section-kicker">03 / Publications</p>
        <div className="section-body">
          <div className="section-heading-row">
            <h2>Selected work</h2>
            <a className="text-link" href="https://scholar.google.com/citations?user=dxJUfNAAAAAJ&hl=en">Full list on Scholar <ArrowUpRight size={16} /></a>
          </div>
          <div className="publication-list">
            {publications.map((paper) => (
              <article className="paper" key={paper.title}>
                <div className="paper-meta"><span>{paper.year}</span><span>{paper.type}</span></div>
                <div><h3>{paper.href ? <a href={paper.href}>{paper.title}</a> : paper.title}</h3><p className="authors">{paper.authors}</p><p className="venue">{paper.venue}</p></div>
                {paper.href && <a className="paper-arrow" href={paper.href} aria-label={`Open ${paper.title}`}><ArrowUpRight size={20} /></a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section-shell split-section" id="experience">
        <p className="section-kicker">04 / Experience</p>
        <div className="section-body">
          <div className="section-heading-row"><h2>Experience</h2></div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-row" key={`${item.company}-${item.period}`}>
                <p className="period">{item.period}</p><div className="timeline-mark"><span /></div>
                <div className="timeline-copy"><p className="company"><Building2 size={16} /> {item.company}</p><h3>{item.role}</h3><p className="location"><MapPin size={14} /> {item.location}</p><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education section-shell split-section" id="education">
        <p className="section-kicker">05 / Education &amp; Service</p>
        <div className="section-body education-grid">
          <div><h2>Education</h2><div className="compact-list">
            <article><span>2021 — Present</span><h3>Ph.D. in Computer Engineering</h3><p>Northeastern University · Boston, MA</p></article>
            <article><span>2015 — 2018</span><h3>M.E. in Electrical Engineering</h3><p>Lamar University · Beaumont, TX</p></article>
            <article><span>2011 — 2015</span><h3>B.E. in Electrical Engineering</h3><p>Inner Mongolia University · China</p></article>
          </div></div>
          <div><h2>Academic service</h2><div className="service-box">
            <p><strong>Peer review</strong><br />NeurIPS, AAAI, ICLR, MIDL, IEEE TNNLS, IEEE Access, IEEE Big Data</p>
            <p><strong>Leadership</strong><br />Session Chair, IEEE HPCC 2025</p>
            <p><strong>Recognition</strong><br />SIGMETRICS 2025 Student Travel Grant</p>
          </div></div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner"><div><p className="eyebrow">Let’s connect</p><h2>Interested in intelligent systems and practical AI?</h2></div><a className="email-button" href="mailto:shiyuehou1@gmail.com"><Mail size={18} /> Email me</a></div>
        <div className="section-shell footer-bottom"><span>© 2026 Shiyue (Jason) Hou</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}

export default App;
