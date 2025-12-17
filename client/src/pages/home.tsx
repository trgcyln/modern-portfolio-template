import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Mail,
  ExternalLink,
  Menu,
  X,
  Award,
  FolderOpen,
  Download,
} from "lucide-react";
import { SiGithub, SiLinkedin, SiHackerrank } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-mono text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors"
            data-testid="link-home"
          >
            turgay.io
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
            Full Stack Developer | 15+ Years Experience
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Turgay Ceylan
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Computer Science & Engineering graduate with Master's degree in Information Technologies.
            Remote Full Stack Developer specializing in ASP.NET, JavaScript, and enterprise web applications.
            Based in Turkey, available for remote opportunities worldwide.
          </p>
          <div className="flex flex-wrap gap-3 mb-8 text-sm">
            <Badge variant="secondary" className="px-3 py-1">
              <Award className="h-3 w-3 mr-1.5" />
              Government-Recognized Project
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Award className="h-3 w-3 mr-1.5" />
              BlackBerry Partnership
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Award className="h-3 w-3 mr-1.5" />
              IELTS 7.0 Certified
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:turgay@turgayceylan.com"
              className="inline-flex items-center gap-2"
              data-testid="link-email-hero"
            >
              <Button>
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/trgcyln"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github-hero"
                aria-label="Visit GitHub profile"
              >
                <Button size="icon" variant="outline" aria-label="GitHub">
                  <SiGithub className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/trgcyln/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin-hero"
                aria-label="Visit LinkedIn profile"
              >
                <Button size="icon" variant="outline" aria-label="LinkedIn">
                  <SiLinkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.hackerrank.com/trgcyln"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-hackerrank-hero"
                aria-label="Visit HackerRank profile"
              >
                <Button size="icon" variant="outline" aria-label="HackerRank">
                  <SiHackerrank className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  id,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  id: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 mb-12">
      <div className="flex items-center gap-4 mb-2">
        <div className="p-2 rounded-md bg-accent">
          <Icon className="h-5 w-5 text-accent-foreground" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <Separator className="mt-6" />
    </div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: "Procure Tools Limited",
      role: "Software Developer (Remote)",
      period: "April 2022 – Present · 3 years",
      description:
        "Leading development of Be Connected, an enterprise procurement management platform serving 50+ public and private sector organizations across the UK.",
      achievements: [
        "Implemented Redis caching layer, reducing database queries by 60% and improving page load times by 45%",
        "Modernized legacy ASP.NET Web Forms application with DevExpress Bootstrap controls and responsive UI components",
        "Developed real-time analytics dashboards using amCharts, processing 100K+ procurement transactions monthly",
        "Migrated data access layer to Entity Framework 6.0, improving code maintainability and reducing bugs by 30%",
        "Collaborated with remote team across 3 time zones, maintaining 99.5% uptime for critical procurement systems"
      ],
      technologies: [
        "ASP.NET Web Forms",
        "C#",
        "DevExpress",
        "Redis",
        "Entity Framework 6.0",
        "SQL Server",
        "amCharts",
        "JavaScript",
        "Metronic UI"
      ],
    },
    {
      company: "Freelancer",
      role: "Full Stack Developer",
      period: "May 2020 – April 2022 · 2 years",
      description:
        "Independent consultant delivering custom web solutions for diverse clients across healthcare, e-commerce, and education sectors.",
      achievements: [
        "Developed custom e-commerce platform for Turkish retail client, handling 1000+ daily transactions",
        "Built healthcare appointment system with SMS notifications, serving 5 medical clinics with 200+ daily appointments",
        "Created WordPress plugins for educational institutions, deployed across 15+ university websites",
        "Maintained 100% client satisfaction rate with 8 long-term contracts and 5-star reviews"
      ],
      technologies: ["ASP.NET MVC", "JavaScript", "SQL Server", "WordPress", "PHP", "REST APIs", "jQuery"],
    },
    {
      company: "Hexagon",
      role: "Software Developer",
      period: "February 2018 – May 2020 · 2 years 3 months",
      description:
        "Front-end developer for Moneta, an enterprise project management and issue tracking platform built on ASP.NET MVC 5.",
      achievements: [
        "Redesigned UI for 10+ core modules, improving user satisfaction scores by 40%",
        "Implemented responsive design patterns, achieving mobile compatibility for tablet and phone users",
        "Optimized front-end performance, reducing JavaScript bundle size by 35% and improving load times",
        "Collaborated with 5-person development team using Agile/Scrum methodology"
      ],
      technologies: ["ASP.NET MVC 5", "JavaScript", "CSS3", "jQuery", "Bootstrap", "AJAX"],
    },
    {
      company: "Freelancer",
      role: "Full Stack Developer",
      period: "September 2016 – January 2018 · 1 year 4 months",
      description:
        "Contract developer specializing in WordPress solutions and custom web applications for small to medium businesses.",
      achievements: [
        "Developed 12+ custom WordPress websites with e-commerce integration for local businesses",
        "Created inventory management system for automotive parts distributor, tracking 5000+ SKUs",
        "Built customer portal for insurance company with 2000+ registered users",
        "Delivered all projects on time and within budget, earning repeat business from 70% of clients"
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "ASP.NET", "WooCommerce", "Custom Themes"],
    },
    {
      company: "Inomotif Ltd.",
      role: "Co-Owner & Software Developer",
      period: "April 2012 – August 2016 · 4 years 4 months",
      description:
        "Co-founded tech startup developing Celebi, an Android navigation app with government backing. Led technical development of traffic-aware navigation system using 4G networking and real-time data processing.",
      achievements: [
        "Secured government funding from Ministry of Science, Industry and Technology, Republic of Turkey",
        "Obtained additional grant from Small and Medium Enterprises Development Organization",
        "Established technical partnership with BlackBerry Turkey for HTML5-based navigation solution",
        "Built Android app processing real-time traffic data from 1000+ data points across Istanbul",
        "Managed complete product lifecycle from prototype to production deployment",
        "Led team of 3 developers in agile development environment"
      ],
      technologies: ["Android", "Java", "4G Networking", "Web Services", "HTML5", "REST APIs", "Google Maps API", "Real-time Data Processing"],
    },
    {
      company: "Huawei",
      role: "Software Developer (Internship)",
      period: "May 2010 – September 2010 · 4 months",
      description:
        "Software development internship position. Successfully completed internship and received offer for full-time role. Left to pursue Master's degree at Sabancı University.",
      technologies: ["Java", "Software Development", "Agile Methodology"],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Briefcase} title="Experience" id="experience" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-visible">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-md" />
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl font-semibold">{exp.company}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {exp.role}
                  </Badge>
                </div>
                {exp.period && (
                  <p className="text-sm text-muted-foreground mt-2">{exp.period}</p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {exp.achievements && (
                  <div className="pt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-chart-4 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Expert (Daily Use)",
      skills: ["C#", "ASP.NET", "JavaScript", "SQL Server", "Entity Framework", "HTML5", "CSS3"],
    },
    {
      title: "Advanced",
      skills: ["Redis", "DevExpress", "jQuery", "ASP.NET MVC", "Bootstrap", "Git", "REST APIs"],
    },
    {
      title: "Proficient",
      skills: ["WordPress", "PHP", "Docker", "Nginx", "MySQL", "AJAX", "Responsive Design"],
    },
    {
      title: "Familiar",
      skills: ["Java", "Android", "React", "Node.js", "MongoDB", "Azure", "CI/CD"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Visual Studio",
        "VS Code",
        "Windows Server",
        "Ubuntu",
        "Figma",
        "Agile/Scrum",
        "amCharts",
        "Metronic UI"
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Code2} title="Skills & Qualifications" id="skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const education = [
    {
      institution: "Sabancı University",
      faculty: "Faculty of Engineering",
      degree: "Master's Degree in Information Technologies",
      period: "2010 – 2012",
      courses: [
        "Adv. Java",
        "SOA Concepts",
        "TCP/IP Networking",
        "Linux System Administration",
        "C# & ASP.NET",
        "OOP Analysis & Design using UML",
        "Mobile App Development in Android",
      ],
      project: {
        title: "Android Navigation Application",
        description:
          "Android Navigation Application which uses web services to get live & predicted traffic information",
      },
    },
    {
      institution: "Işık University",
      faculty: "Faculty of Engineering",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      period: "2005 – 2010",
      courses: [
        "Operating Systems",
        "Data Structures and Algorithms",
        "Computer Organization and Design",
        "OOP with Java",
        "Software Engineering",
        "Computer Networks",
        "Principles of Programming Languages",
        "Human Computer Interaction",
      ],
      project: {
        title: "Istanbul's Journey Planner",
        description: "Similar to Transport for London journey planning system",
        link: "https://tfl.gov.uk/plan-a-journey/",
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={GraduationCap} title="Education" id="education" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{edu.institution}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{edu.faculty}</p>
                <p className="text-sm font-medium text-foreground mt-1">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <Badge key={course} variant="outline" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    Graduation Project
                  </p>
                  <h3 className="font-medium text-foreground mb-1">{edu.project.title}</h3>
                  <p className="text-sm text-muted-foreground">{edu.project.description}</p>
                  {edu.project.link && (
                    <a
                      href={edu.project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mt-2 transition-colors"
                      data-testid={`link-project-${index}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Reference
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const certifications = [
    {
      title: "IELTS Certificate",
      score: "Overall Score: 7.0",
      date: "July 2018",
      icon: Award,
    },
    {
      title: "IELTS Certificate",
      score: "Overall Score: 6.5",
      date: "May 2014",
      icon: Award,
    },
    {
      title: "GRE Certificate",
      score: "",
      date: "May 2014",
      icon: Award,
    },
  ];

  const languages = [
    { language: "English", level: "Fluent/Advanced" },
    { language: "German", level: "Elementary" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Award} title="Certifications & Languages" id="certifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardContent className="py-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                    {cert.score && (
                      <p className="text-sm text-muted-foreground mb-1">{cert.score}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{lang.language}</span>
                  <Badge variant="secondary">{lang.level}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ContactSection() {
  const contacts = [
    {
      label: "Website",
      value: "turgay.io",
      href: "https://turgay.io/",
      icon: ExternalLink,
    },
    {
      label: "GitHub",
      value: "github.com/trgcyln",
      href: "https://github.com/trgcyln",
      icon: SiGithub,
    },
    {
      label: "HackerRank",
      value: "hackerrank.com/trgcyln",
      href: "https://www.hackerrank.com/trgcyln",
      icon: SiHackerrank,
    },
    {
      label: "Freelancer",
      value: "freelancer.com/u/gordack",
      href: "https://www.freelancer.com/u/gordack",
      icon: ExternalLink,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/trgcyln",
      href: "https://www.linkedin.com/in/trgcyln/",
      icon: SiLinkedin,
    },
    {
      label: "Email",
      value: "turgay@turgayceylan.com",
      href: "mailto:turgay@turgayceylan.com",
      icon: Mail,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 scroll-mt-24" id="about">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Mail} title="About & Contact" id="contact" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto") ? undefined : "_blank"}
              rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group"
              data-testid={`link-contact-${contact.label.toLowerCase()}`}
            >
              <Card className="hover-elevate h-full transition-colors">
                <CardContent className="flex items-center gap-4 py-4">
                  <div className="p-2 rounded-md bg-muted group-hover:bg-accent transition-colors">
                    <contact.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">
                      {contact.label}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {contact.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Be Connected Procurement Platform",
      description: "Enterprise SaaS platform serving 50+ UK public sector organizations. Real-time analytics dashboards processing 100K+ monthly transactions with Redis caching and Entity Framework data layer.",
      technologies: ["ASP.NET Web Forms", "C#", "Redis", "Entity Framework 6.0", "SQL Server", "amCharts", "DevExpress"],
      type: "Enterprise",
      metrics: "50+ clients · 100K+ transactions/month · 99.5% uptime"
    },
    {
      title: "Healthcare Appointment System",
      description: "Custom appointment management system with SMS notifications for medical clinics. Handles 200+ daily appointments across 5 clinics with automated reminders and patient portal.",
      technologies: ["ASP.NET MVC", "SQL Server", "SMS API", "JavaScript", "Bootstrap"],
      type: "Healthcare",
      metrics: "5 clinics · 200+ appointments/day"
    },
    {
      title: "Celebi Navigation App",
      description: "Government-backed Android navigation system with real-time traffic prediction. Secured funding from Turkish Ministry of Science and established partnership with BlackBerry Turkey.",
      technologies: ["Android", "Java", "4G Networking", "Google Maps API", "HTML5", "Web Services"],
      type: "Mobile",
      metrics: "Government-funded · BlackBerry partnership · 1000+ data points"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution for Turkish retail client with inventory management, payment gateway integration, and admin dashboard. Processes 1000+ daily transactions.",
      technologies: ["ASP.NET MVC", "SQL Server", "Payment API", "JavaScript", "Bootstrap"],
      type: "E-commerce",
      metrics: "1000+ transactions/day"
    },
    {
      title: "WordPress Educational Plugins",
      description: "Suite of custom WordPress plugins for universities including course management, student portals, and event calendars. Deployed across 15+ educational institution websites.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "jQuery"],
      type: "Education",
      metrics: "15+ university deployments"
    },
    {
      title: "Moneta Project Management",
      description: "Enterprise issue tracking and project management tool. Led front-end modernization, implementing responsive design and optimizing performance for 10+ core modules.",
      technologies: ["ASP.NET MVC 5", "JavaScript", "CSS3", "jQuery", "Bootstrap"],
      type: "Enterprise",
      metrics: "10+ modules redesigned · 40% improved satisfaction"
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 scroll-mt-24" id="projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={FolderOpen} title="Projects" id="projects-header" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs shrink-0">
                      {project.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  {project.metrics && (
                    <p className="text-xs font-medium text-chart-4">
                      {project.metrics}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumeDownloadSection() {
  const handleDownload = async () => {
    // Dynamically import jsPDF only when needed
    const { jsPDF } = await import("jspdf");

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPos = 20;

    // Helper function to add text
    const addText = (text: string, fontSize: number, isBold: boolean = false, indent: number = 0) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      const lines = doc.splitTextToSize(text, pageWidth - margin * 2 - indent);
      doc.text(lines, margin + indent, yPos);
      yPos += (lines.length * fontSize * 0.5) + 2;
    };

    const addSpace = (space: number = 5) => {
      yPos += space;
    };

    const checkPageBreak = (neededSpace: number = 20) => {
      if (yPos + neededSpace > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        yPos = 20;
      }
    };

    // Header
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("TURGAY CEYLAN", margin, yPos);
    yPos += 10;

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Full Stack Developer & Software Engineer | 15+ Years Experience", margin, yPos);
    yPos += 8;

    // Contact
    doc.setFontSize(10);
    doc.text("Based in Turkey | Remote Work Available", margin, yPos);
    yPos += 5;
    doc.text("Email: turgay@turgayceylan.com | Website: turgay.io", margin, yPos);
    yPos += 5;
    doc.text("GitHub: github.com/trgcyln | LinkedIn: linkedin.com/in/trgcyln", margin, yPos);
    yPos += 10;

    // Career Highlights
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("CAREER HIGHLIGHTS", margin, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    addText("• Government-Recognized Project (Ministry of Science, Industry & Technology, Turkey)", 10, false, 5);
    addText("• Partnership with BlackBerry Turkey on HTML5 Navigation Solutions", 10, false, 5);
    addText("• IELTS 7.0 Certified - Fluent English for International Collaboration", 10, false, 5);
    addText("• 15+ years full-stack development experience with enterprise platforms", 10, false, 5);
    addSpace(8);

    // Experience
    checkPageBreak(40);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("PROFESSIONAL EXPERIENCE", margin, yPos);
    yPos += 7;

    // Procure Tools
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Procure Tools Limited - Software Developer (Remote)", margin, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("April 2022 - Present (3 years)", margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    addText("• Implemented Redis caching, reducing database queries by 60% and improving load times by 45%", 10, false, 5);
    addText("• Developed analytics dashboards processing 100K+ procurement transactions monthly", 10, false, 5);
    addText("• Serving 50+ UK public/private sector organizations with 99.5% uptime", 10, false, 5);
    addText("Tech: ASP.NET Web Forms, C#, Redis, Entity Framework 6.0, SQL Server, amCharts", 9, false, 5);
    addSpace(6);

    // Freelancer 2020-2022
    checkPageBreak(30);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Freelancer - Full Stack Developer", margin, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("May 2020 - April 2022 (2 years)", margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    addText("• E-commerce platform handling 1000+ daily transactions for Turkish retail client", 10, false, 5);
    addText("• Healthcare appointment system serving 5 clinics with 200+ daily appointments", 10, false, 5);
    addText("• WordPress plugins deployed across 15+ university websites", 10, false, 5);
    addSpace(6);

    // Hexagon
    checkPageBreak(30);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Hexagon - Software Developer", margin, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("February 2018 - May 2020 (2 years 3 months)", margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    addText("• Redesigned UI for 10+ modules, improving user satisfaction by 40%", 10, false, 5);
    addText("• Reduced JavaScript bundle size by 35%, optimizing front-end performance", 10, false, 5);
    addSpace(6);

    // Inomotif
    checkPageBreak(35);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Inomotif Ltd. - Co-Owner & Software Developer", margin, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("April 2012 - August 2016 (4 years 4 months)", margin, yPos);
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    addText("• Co-founded tech startup developing Celebi Android navigation app", 10, false, 5);
    addText("• Secured government funding from Ministry of Science & Technology", 10, false, 5);
    addText("• Built Android app processing 1000+ real-time traffic data points", 10, false, 5);
    addText("• Led team of 3 developers in agile environment", 10, false, 5);
    addSpace(8);

    // Education
    checkPageBreak(40);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("EDUCATION", margin, yPos);
    yPos += 7;

    doc.setFontSize(11);
    doc.text("Sabanci University - Master's Degree in Information Technologies", margin, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("2010 - 2012 | Faculty of Engineering", margin, yPos);
    yPos += 7;

    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Isik University - Bachelor's in Computer Science and Engineering", margin, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("2005 - 2010 | Faculty of Engineering", margin, yPos);
    yPos += 10;

    // Skills
    checkPageBreak(40);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("TECHNICAL SKILLS", margin, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    addText("Expert: C#, ASP.NET, JavaScript, SQL Server, Entity Framework, HTML5, CSS3", 10, false, 0);
    addText("Advanced: Redis, DevExpress, jQuery, ASP.NET MVC, Bootstrap, Git, REST APIs", 10, false, 0);
    addText("Proficient: WordPress, PHP, Docker, Nginx, MySQL, AJAX, Responsive Design", 10, false, 0);
    addText("Tools: Visual Studio, VS Code, Windows Server, Ubuntu, Figma, Agile/Scrum", 10, false, 0);
    addSpace(8);

    // Certifications
    checkPageBreak(25);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("CERTIFICATIONS & LANGUAGES", margin, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    addText("• IELTS Certificate: Overall Score 7.0 (July 2018)", 10, false, 0);
    addText("• IELTS Certificate: Overall Score 6.5 (May 2014)", 10, false, 0);
    addText("• GRE Certificate (May 2014)", 10, false, 0);
    addText("• Languages: English (Fluent/Advanced), German (Elementary)", 10, false, 0);

    // Save PDF
    doc.save("Turgay_Ceylan_Resume.pdf");
  };

  return (
    <section className="py-12 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Download My Resume
                </h3>
                <p className="text-muted-foreground">
                  Get a professionally formatted PDF with all experience and qualifications.
                </p>
              </div>
              <Button onClick={handleDownload} className="gap-2" data-testid="button-download-resume">
                <Download className="h-4 w-4" />
                Download PDF Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Turgay Ceylan. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-back-to-top"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AnimatedSection>
          <ExperienceSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection>
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection>
          <EducationSection />
        </AnimatedSection>
        <AnimatedSection>
          <CertificationsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ResumeDownloadSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
