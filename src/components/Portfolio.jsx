import React from 'react';
import { ArrowRight, BarChart3, TrendingUp } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      client: "FinTech Startup",
      title: "Legal Structuring & App Launch",
      results: ["40% Faster Time-to-Market", "100% Compliance"],
      desc: "We provided full-stack legal and tech consulting to structure their entity and build a secure financial application.",
      image: "linear-gradient(135deg, #0B57D0, #0842A0)",
      icon: <TrendingUp size={24} />
    },
    {
      id: 2,
      client: "Enterprise E-Commerce",
      title: "Digital Transformation & Growth",
      results: ["2.5x Revenue Growth", "30% Lower CAC"],
      desc: "A complete overhaul of their digital marketing strategy combined with a highly optimized custom web platform.",
      image: "linear-gradient(135deg, #1E293B, #0F172A)",
      icon: <BarChart3 size={24} />
    }
  ];

  return (
    <section className="section bg-background" id="portfolio">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Client Success</span>
          <h2 className="mt-2 text-3xl font-bold">Featured Case Studies</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">Real results for real clients. See how our integrated consulting and technology services drive exponential growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card premium-card">
              <div className="case-study-visual" style={{ background: study.image }}>
                {study.icon}
                <div className="case-study-client">{study.client}</div>
              </div>
              <div className="case-study-content">
                <h3 className="case-study-title">{study.title}</h3>
                <p className="case-study-desc mt-3">{study.desc}</p>
                
                <div className="case-study-results mt-6">
                  <span className="results-label">Key Results:</span>
                  <ul className="results-list mt-2">
                    {study.results.map((res, idx) => (
                      <li key={idx}>✓ {res}</li>
                    ))}
                  </ul>
                </div>

                <a href="#" className="case-study-link mt-6 flex items-center gap-1 font-medium">
                  Read Full Case Study <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
