import { ArrowUpRight, GraduationCap, Mail, MapPin } from 'lucide-react';

const researchAreas = [
  { title: 'Agentic Systems', text: 'Adaptive agents for data placement, admission control, and feedback-driven infrastructure optimization.' },
  { title: 'Federated Learning', text: 'System-aware learning for heterogeneous clients, overlapping data, and energy-conscious training.' },
  { title: 'Intelligent Data Systems', text: 'Learning-guided storage, caching, prefetching, and near-data processing for data-intensive workloads.' },
];

const publications = [
  {
    year: '2026', type: 'Under Review',
    title: 'TierPilot: A Unified Learning Framework for Data Placement in Distributed Storage Systems',
    authors: 'Shiyue Hou, Pavana Prakash, Rolando Pablo Hong Enriquez, Alex Veprinsky, Dejan Milojicic, Ningfang Mi',
    venue: 'Under review', image: './papers/tierpilot-overview.jpg',
    summary: 'A learning-guided, cost-aware agent that separates data-importance prediction from tier placement decisions.',
  },
  {
    year: '2026', type: 'Under Review',
    title: 'FedEcoStream: Energy-Aware Federated Learning with Stream-Based Prefetching for Distributed Storage Optimization',
    authors: 'Shiyue Hou, Pavana Prakash, Rolando Pablo Hong Enriquez, Alex Veprinsky, Dejan Milojicic, Ningfang Mi',
    venue: 'Under review', image: './papers/fedecostream-overview.jpg',
    summary: 'An energy-aware federated framework that combines stream segmentation, graph learning, and adaptive client selection.',
  },
  {
    year: '2025', type: 'Publication',
    title: 'Carbon Friendly Federated Learning Framework for Optimized Distributed Storage Systems',
    authors: 'Shiyue Hou, Pavana Prakash, Rolando Pablo Hong Enriquez, Ningfang Mi, Alex Veprinsky, Dejan Milojicic',
    venue: 'ACM SIGMETRICS Performance Evaluation Review', href: 'https://dl.acm.org/doi/10.1145/3764944.3764958',
    image: './papers/carbon-fl-overview.jpg',
    summary: 'A federated LSTM framework for predicting cache demand while reducing communication energy and carbon emissions.',
  },
  {
    year: '2025', type: 'Publication',
    title: 'PECO: Probabilistic Evaluation-based Client Selection for Federated Learning with Overlapping Clients',
    authors: 'Allen Yang, Shiyue Hou, Yiming Xie, Bo Sheng, Ningfang Mi', venue: 'IEEE HPCC',
    href: 'https://www.cs.umb.edu/~shengbo/paper/hpcc25.pdf', image: './papers/peco-overview.jpg',
    summary: 'A probabilistic client-selection strategy that balances shared and unique contributions from overlapping clients.',
  },
  {
    year: '2025', type: 'Preprint', title: 'Enabling Flexible Multi-LLM Integration for Scalable Knowledge Aggregation',
    authors: 'Zhenglun Kong, Zheng Zhan, Shiyue Hou, et al.', venue: 'arXiv:2505.23844',
    href: 'https://arxiv.org/abs/2505.23844', image: './papers/multi-llm-overview.png',
    summary: 'Adaptive source-model selection and weighted fusion for scalable knowledge aggregation across multiple LLMs.',
  },
  {
    year: '2024', type: 'Publication', title: 'FedLDCS: Adaptive Divergence-Based Client Selection for Federated Learning',
    authors: 'Shiyue Hou, Zhenglun Kong', venue: 'FedKDD Workshop', href: 'https://openreview.net/forum?id=pNZ0fQ5tDV',
    image: './papers/fedldcs-overview.jpg',
    summary: 'A divergence-based policy that prioritizes clients whose local models can contribute most to global training.',
  },
  {
    year: '2024', type: 'Publication',
    title: 'Performance Analysis of Data Processing in Distributed File Systems with Near Data Processing',
    authors: 'Shiyue Hou, Nathan R. Tallent, Li Wang, Ningfang Mi', venue: 'IEEE ISNCC',
    href: 'https://doi.org/10.1109/ISNCC62547.2024.10758994', image: './papers/near-data-overview.jpg',
    summary: 'An evaluation of traditional, optimized, and near-data processing layouts for distributed file systems.',
  },
];

const experience = [
  { period: '2024 - Present', company: 'HPE Labs', role: 'Research Associate Intern', location: 'Milpitas, California', logo: './logos/hpe-labs-v2.png', href: 'https://www.hpe.com/us/en/hewlett-packard-labs.html', detail: 'Agentic data placement, graph learning for storage prefetching, and carbon-aware federated learning.' },
  { period: '2023 - 2025', company: 'Pacific Northwest National Laboratory', role: 'Visiting Researcher', location: 'Richland, Washington', logo: './logos/pnnl.jpg', href: 'https://www.pnnl.gov/', detail: 'Near-data processing on Ceph and data-movement-aware pipelines with Arrow, Parquet, and DuckDB.' },
  { period: 'Summer 2022', company: 'NetApp', role: 'System Performance Intern', location: 'San Jose, California', logo: './logos/netapp-v2.png', href: 'https://www.netapp.com/', detail: 'Performance testing, telemetry, and ML-based anomaly detection for ONTAP replication systems.' },
  { period: '2020 - 2021', company: 'Bilibili Group', role: 'Senior Software Engineer', location: 'Shanghai, China', logo: './logos/bilibili-v2.jpg', href: 'https://www.bilibili.com/', detail: 'Cross-platform applications and data integration for Windows, Surface, Xbox, Android, and iOS.' },
  { period: '2018 - 2020', company: 'Intel Corporation', role: 'Software Engineer', location: 'Dalian, China', logo: './logos/intel-v2.png', href: 'https://www.intel.com/', detail: 'Data analytics, visualization, and multithreaded pipelines for 3D NAND manufacturing systems.' },
];

const education = [
  { period: '2021 - Present', degree: 'Ph.D. in Computer Engineering', school: 'Northeastern University', location: 'Boston, Massachusetts', logo: './logos/northeastern-v2.png', href: 'https://www.northeastern.edu/', note: <>Advisor: <a href="https://www1.ece.neu.edu/~ningfang/">Prof. Ningfang Mi</a></> },
  { period: '2015 - 2018', degree: 'Master of Engineering in Electrical Engineering', school: 'Lamar University', location: 'Beaumont, Texas', logo: './logos/lamar.png', href: 'https://www.lamar.edu/' },
  { period: '2011 - 2015', degree: 'Bachelor of Engineering in Electrical Engineering', school: 'Inner Mongolia University', location: 'Inner Mongolia, China', logo: './logos/inner-mongolia-lockup.png', href: 'https://www.imu.edu.cn/' },
];

function App() {
  return (
    <main id="top">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Home">SH</a>
        <div className="nav-links"><a href="#about">About</a><a href="#research">Research</a><a href="#publications">Publications</a><a href="#experience">Experience</a></div>
      </nav>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Computer Engineering · AI &amp; Data Systems</p>
          <h1>Shiyue Hou</h1>
          <p className="hero-role">Ph.D. Candidate at Northeastern University</p>
          <p className="hero-lede">I build intelligent and efficient systems at the intersection of AI agents, federated learning, and distributed data infrastructure.</p>
          <div className="social-links" aria-label="Profile links">
            <a href="mailto:shiyuehou1@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <a href="https://scholar.google.com/citations?user=dxJUfNAAAAAJ&hl=en" aria-label="Google Scholar"><GraduationCap size={19} /></a>
            <a className="social-text" href="https://github.com/shou123" aria-label="GitHub">GH</a>
            <a className="social-text" href="https://www.linkedin.com/in/shiyuehou/" aria-label="LinkedIn">in</a>
            <a className="cv-link" href="./Shiyue_Hou_Resume.pdf">CV</a>
          </div>
        </div>
        <figure className="portrait-wrap">
          <img src="./shiyue-hou-yosemite-v2.jpg" alt="Shiyue Hou at Yosemite National Park" />
          <figcaption>Yosemite National Park</figcaption>
        </figure>
      </section>

      <section className="about section-shell split-section" id="about">
        <p className="section-kicker">About</p>
        <div className="section-body about-copy">
          <p>I am a Ph.D. candidate in the Department of Electrical and Computer Engineering at <a href="https://www.northeastern.edu/">Northeastern University</a>, advised by Prof. <a href="https://www1.ece.neu.edu/~ningfang/">Ningfang Mi</a>. My research lies at the intersection of machine learning and computer systems, with a focus on agentic systems, federated learning, and intelligent data infrastructure.</p>
          <p>I am currently a Research Associate Intern at <a href="https://www.hpe.com/us/en/hewlett-packard-labs.html">HPE Labs</a>. Previously, I was a Visiting Researcher at <a href="https://www.pnnl.gov/">Pacific Northwest National Laboratory</a> and a System Performance Intern at <a href="https://www.netapp.com/">NetApp</a>. Before beginning my doctoral research, I worked as a Senior Software Engineer at <a href="https://www.bilibili.com/">Bilibili</a> and as a Software Engineer at <a href="https://www.intel.com/">Intel</a>.</p>
          <div className="status-note"><span /> Based in the Boston area</div>
        </div>
      </section>

      <section className="research section-shell split-section" id="research">
        <p className="section-kicker">Research</p>
        <div className="section-body"><h2>Research interests</h2><div className="research-grid">
          {researchAreas.map((area, index) => <article className="research-card" key={area.title}><span>0{index + 1}</span><div><h3>{area.title}</h3><p>{area.text}</p></div></article>)}
        </div></div>
      </section>

      <section className="publications section-shell split-section" id="publications">
        <p className="section-kicker">Publications</p>
        <div className="section-body">
          <div className="section-heading-row"><h2>Selected work</h2><a className="text-link" href="https://scholar.google.com/citations?user=dxJUfNAAAAAJ&hl=en">Google Scholar <ArrowUpRight size={15} /></a></div>
          <div className="publication-list">{publications.map((paper) => <article className="paper" key={paper.title}>
            <a className="paper-image" href={paper.href ?? paper.image} aria-label={`Open ${paper.title}`}><img src={paper.image} alt={`Overview diagram for ${paper.title}`} loading="lazy" /></a>
            <div className="paper-copy"><p className="paper-meta"><span>{paper.year}</span><span>{paper.type}</span></p><h3>{paper.href ? <a href={paper.href}>{paper.title}</a> : paper.title}</h3><p className="authors">{paper.authors}</p><p className="venue">{paper.venue}</p><p className="paper-summary">{paper.summary}</p></div>
          </article>)}</div>
        </div>
      </section>

      <section className="experience section-shell split-section" id="experience">
        <p className="section-kicker">Experience</p>
        <div className="section-body"><h2>Research &amp; industry</h2><div className="experience-list">{experience.map((item) => <article className="experience-row" key={`${item.company}-${item.period}`}>
          <a className="logo-box" href={item.href} aria-label={item.company}><img src={item.logo} alt={`${item.company} logo`} loading="lazy" /></a>
          <div className="experience-copy"><div className="experience-title"><div><h3>{item.company}</h3><p>{item.role}</p></div><p className="period">{item.period}</p></div><p className="location"><MapPin size={13} /> {item.location}</p><p className="experience-detail">{item.detail}</p></div>
        </article>)}</div></div>
      </section>

      <section className="education section-shell split-section" id="education">
        <p className="section-kicker">Education</p>
        <div className="section-body"><h2>Academic background</h2><div className="education-list">{education.map((item) => <article className="education-row" key={item.degree}>
          <a className="logo-box" href={item.href} aria-label={item.school}><img src={item.logo} alt={`${item.school} logo`} loading="lazy" /></a>
          <div className="education-copy"><p className="period">{item.period}</p><h3>{item.degree}</h3><p className="education-school">{item.school}</p><p className="location"><MapPin size={13} /> {item.location}</p>{item.note && <p className="education-note">{item.note}</p>}</div>
        </article>)}</div></div>
      </section>

      <section className="service section-shell split-section" id="service">
        <p className="section-kicker">Service</p>
        <div className="section-body service-grid"><div><h2>Academic service</h2><p><strong>Peer review</strong><br />NeurIPS, AAAI, ICLR, MIDL, IEEE TNNLS, IEEE Access, and IEEE Big Data.</p></div><div><p><strong>Leadership</strong><br />Session Chair, IEEE HPCC 2025.</p><p><strong>Recognition</strong><br />SIGMETRICS 2025 Student Travel Grant.</p></div></div>
      </section>

      <footer><div className="section-shell footer-bottom"><span>© 2026 Shiyue Hou</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}

export default App;
