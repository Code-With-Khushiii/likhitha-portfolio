import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Data Analyst with 5+ years delivering end-to-end analytics (ETL → data warehouse → dashboards) for Cardinal Health and Capital One, leveraging Azure Data Factory/Synapse, AWS Glue/Redshift, and Snowflake. Builds high-performance datasets using SQL + Python (Pandas, NumPy, scikit learn) across structured + semi-structured data (JSON/XML) and NoSQL (Cosmos DB) to power predictive and operational insights. Develops stakeholder ready Power BI/Tableau KPI dashboards and automated reporting, partnering cross-functionally in Agile (Jira/Confluence) to improve data quality, speed analysis cycles, and drive business decisions.";

  const experience = [
    {
      company: "Cardinal Health",
      role: "Data Analyst",
      location: "",
      dates: "Jul. 2025 - Present",
      highlights: [
        "Engineered Azure Data Factory ETL pipelines to move healthcare data from source systems into Azure Data Lake Storage and 2 analytics layers (Azure Synapse Analytics, Snowflake) for governed reporting and downstream analytics.",
        "Designed Cosmos DB (NoSQL) data structures and query patterns to enable fast retrieval of 2 data types (semi-structured, unstructured) healthcare data, including records and metadata.",
        "Operationalized enterprise analysis in Azure Synapse Analytics across 2 dataset domains (clinical, administrative) to power reporting on patient care, resource utilization, and operational efficiency.",
        "Enforced KPI data quality by building SQL-based transformation logic and validation checks to detect and correct data issues (missing records, incorrect codes) and maintain reporting reliability.",
        "Built Power BI dashboards using DAX to track patient demographics, outcomes, and departmental performance; automated recurring operational analysis using advanced Excel tooling.",
        "Implemented Python analytics workflows (Pandas, NumPy, scikit learn, SQLAlchemy) within Agile execution using 2 tools (Jira, Confluence); documented workflows with UML + MS Visio and enabled stakeholders through Power BI training."
      ]
    },
    {
      company: "CapitalOne",
      role: "Data Analyst",
      location: "",
      dates: "Feb. 2024 – Jul. 2025",
      highlights: [
        "Orchestrated ETL automation across 2 cloud stacks (Azure + AWS) using Azure Data Factory and AWS Glue, enabling reliable cross-platform data integration for analytics use cases.",
        "Scaled analytics in 2 Azure data platforms (Azure SQL Database + Azure Synapse Analytics) to manage and analyze large datasets with performance focused query execution and data operations monitoring.",
        "Launched financial risk and fraud analytics using 2 languages (SQL, Python) and 3 Python libraries (Pandas, NumPy, scikit learn); built Power BI dashboards for transaction monitoring and anomaly detection for executive reporting.",
        "Implemented 2 machine-learning models (Logistic Regression, SVM) and operationalised statistical analysis / hypothesis testing using Python + R (ggplot2, Shiny) to identify trends, anomalies, and risk signals.",
        "Integrated 4+ enterprise data stores (PostgreSQL, MySQL, Oracle, NoSQL) and published dashboards to Tableau Server with row-level security and drill-down analysis to enable end-to-end reporting."
      ]
    },
    {
      company: "Accenture",
      role: "Application Development Analyst",
      location: "",
      dates: "Jan. 2020 – Jul. 2022",
      highlights: [
        "Operationalised analytics datasets using 3 Azure data services (Azure SQL Database, Azure Data Lake, Azure Synapse Analytics) to enable scalable reporting and operational performance analytics.",
        "Streamlined ETL workflows by developing SQL scripts and DB2 batch programs for extraction, transformation, and loading; executed data profiling and governance checks using SQL Server + TOAD to resolve business-reported data quality issues.",
        "Implemented Azure AD RBAC, security monitoring (Azure Monitor, Security Center), and BI dashboards (Tableau, Power BI); standardized workflows using Visio and UML."
      ]
    }
  ];

  const projects = [
    {
      title: "SentinelAI – AI-Based IP Protection System",
      subtitle: "pHash + CLIP/BLIP detection pipeline",
      category: "AI Governance",
      introduction: "Architected a scalable ML review loop that fused perceptual hashing with CLIP/BLIP embeddings to catch AI-generated or tampered marketing assets before they left staging.",
      problem: "Global marketing releases risked brand misuse because AI-manipulated or synthetic derivatives could bypass manual review queues.",
      objective: "Detect and quarantine AI-generated or modified assets in near real time without exploding GPU spend.",
      methodology: [
        "Combined pHash fingerprinting with CLIP/BLIP similarity scoring to measure semantic drift against a golden image registry.",
        "Implemented a tiered execution path: lightweight CPU hashing first, escalating to GPU-backed CLIP/BLIP only when confidence bands narrowed.",
        "Containerized the services for Linux workers on IBM Cloud with IaC-managed scaling, alerting, and audit-grade logging."
      ],
      results: [
        "Built a scalable ML pipeline using pHash + CLIP/BLIP to detect AI-generated and modified image misuse.",
        "Reduced compute cost by ~80% versus always-on GPU inference through the tiered execution model.",
        "Deployed on Linux/IBM Cloud where I served as lead architect and PM unifying ML, infra, and compliance stakeholders.",
        "Product / Growth-Focused Angle: Identified a market gap in IP protection caused by generative AI image manipulation.",
        "Designed a cost-efficient AI safeguard that balanced accuracy, scalability, and infrastructure cost.",
        "Applied product thinking plus ML rigor to protect creators at internet scale."
      ],
      conclusion: "Showcased end-to-end ownership of AI safety controls, balancing detection rigor with pragmatic cost management."
    },
    {
      title: "LLM Support Chatbot",
      subtitle: "AWS Bedrock + Retrieval-Augmented Generation",
      category: "AI Product Operations",
      introduction: "Architected and deployed a cloud-native Tier-1 assistant using AWS Bedrock + RAG to automate high-volume workflows and enable 24/7 internal response coverage.",
      problem: "High-volume, repetitive internal support questions created ticket backlogs and slowed resolution for more complex issues.",
      objective: "Deflect Tier-1 tickets while maintaining secure, IAM-aligned access and clear escalation paths to human experts.",
      methodology: [
        "Provisioned Bedrock agents, S3 knowledge stores, and Lambda-based orchestration for retrieval-augmented generation.",
        "Integrated internal documentation and SOPs into a secure knowledge base, incorporating RBAC signals and audit logging.",
        "Integrated a Node.js chatbot into internal workflows so users could self-serve answers within existing tools."
      ],
      results: [
        "Improved resolution efficiency by 45% and significantly reduced ticket backlog for Tier-1 issues.",
        "Enabled 24/7 internal coverage for common questions without expanding headcount.",
        "Freed product and support teams to focus on higher-impact, Tier-2 and Tier-3 workflows."
      ],
      conclusion: "Demonstrated how AI copilots can scale internal support operations while preserving security and clear escalation paths."
    },
    {
      title: "Power BI Airline Dashboard",
      subtitle: "Flight Operations Analytics",
      category: "Product Analytics",
      introduction: "Designed Power BI dashboards using ETL pipelines, SQL models, and Splunk logs to cut manual reporting and improve operational visibility.",
      problem: "Manual, spreadsheet-driven reporting slowed access to route performance, operational KPIs, and anomaly detection.",
      objective: "Automate KPI refreshes and provide real-time insights for operations, product, and support stakeholders.",
      methodology: [
        "Built ETL pipelines and T-SQL models to transform raw operational data into analytics-ready tables.",
        "Connected Splunk logs to Power BI to surface infrastructure and performance signals alongside business KPIs.",
        "Developed DAX measures and interactive dashboard views tailored to leadership, operations, and support teams."
      ],
      results: [
        "Cut manual reporting effort by 40% and increased analytical efficiency by 40%.",
        "Improved cross-team alignment with shared definitions of KPIs and a single source of truth.",
        "Enabled faster detection of anomalies and better prioritization of follow-up actions."
      ],
      conclusion: "Showcased how thoughtful data modeling and visualization can drive faster, data-backed product and operations decisions."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Languages',
      skills: ['SQL', 'Python', 'R', 'Java']
    },
    {
      icon: TrendingUp,
      title: 'BI / Reporting',
      skills: ['Power BI (DAX)', 'Tableau', 'Excel (PivotTables, VBA)']
    },
    {
      icon: Users,
      title: 'ETL / Big Data',
      skills: ['Azure Data Factory', 'AWS Glue', 'Informatica', 'Alteryx', 'PySpark', 'Hadoop']
    },
    {
      icon: Lightbulb,
      title: 'Data Warehousing',
      skills: ['Snowflake', 'Azure Synapse Analytics', 'AWS Redshift']
    },
    {
      icon: Rocket,
      title: 'Databases',
      skills: ['Azure SQL', 'SQL Server', 'Oracle (PL/SQL)', 'PostgreSQL', 'MySQL', 'Cosmos DB (NoSQL)']
    },
    {
      icon: Award,
      title: 'Cloud',
      skills: ['Azure', 'AWS']
    },
    {
      icon: Target,
      title: 'Stats / ML',
      skills: ['Regression', 'Hypothesis Testing', 'scikit learn']
    },
    {
      icon: Lightbulb,
      title: 'Tools',
      skills: ['Jira', 'Confluence', 'Jupyter Notebook', 'GitHub']
    }
  ];

  const certifications = [
    {name: 'Microsoft Certified: Power BI Data Analyst Associate', icon: Award},
    {name: 'Microsoft Certified: Fabric Data Engineer Associate', icon: Award},
    {name: 'Microsoft Certified: Azure Fundamentals', icon: Award},
    {name: 'Microsoft Certified: Azure Data Fundamentals', icon: Award},
    {name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)', icon: Award}
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">LIKHITHA K</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'certifications', label: 'Certs' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Likhitha K"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              HARPREET KAUR
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
            Technical Product Specialist | AI Product Ops | Product Analytics
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              FREMONT, CA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🔧 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'EXPERIENCE', value: '5+ Years', detail: 'Data Analytics & ETL' },
              { label: 'TOOLKIT', value: 'SQL · Python · Power BI', detail: 'Azure · Snowflake · AWS' },
              { label: 'CERTIFICATIONS', value: '5 Microsoft', detail: 'Azure & Power BI Certified' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Data Analyst with 5+ years delivering end-to-end analytics (ETL → data warehouse → dashboards) for Cardinal Health and Capital One.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Incident Readiness',
                detail: 'Built runbooks, on-call notes, and Splunk dashboards to triage outages faster and prevent repeat issues.'
              },
              {
                icon: Rocket,
                title: 'Automation Mindset',
                detail: 'Python + SQL scripts across logs, ETL, and validation workflows cut manual toil by 30-40%.'
              },
              {
                icon: Lightbulb,
                title: 'People-First Support',
                detail: 'Partner with engineering, ops, and business teams to translate technical fixes into user-friendly updates.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Delivering end-to-end analytics solutions with Azure, AWS, Snowflake, and modern data platforms.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Data analytics projects, ETL pipelines, and business intelligence solutions delivering actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Need implementation breakdowns or architecture diagrams?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for detailed case studies and logs.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Comprehensive expertise in data analytics, ETL, BI tools, and cloud data platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">CERTIFICATIONS</h2>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Microsoft certifications in Azure, Power BI, and data engineering.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-cream p-6 rounded-sm border border-brown/10 shadow-sm">
                <Award className="w-6 h-6 text-brown mr-4" />
                <span className="text-brown font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">Murray State University</h3>
                  <p className="text-brown font-medium">Master's Degree, Information Systems with Business Analytics</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  Murray, Kentucky, United States · Aug. 2022 – Dec. 2023
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">Jawaharlal Nehru Technological University Hyderabad (JNTUH)</h3>
                  <p className="text-brown font-medium">Bachelor of Technology (B.Tech), Computer Science and Engineering</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  Hyderabad, Telangana, India · Aug. 2016 – May. 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let’s troubleshoot, automate, or brainstorm how to keep your environment resilient.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+19257655000"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (925) 765-5000
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/k-likhitha-lk95992b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:likhithakammana95@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                likhithakammana95@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center">
              <ExternalLink className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Likhitha K · Senior Data Analyst | SQL, Python | Power BI, Tableau
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;