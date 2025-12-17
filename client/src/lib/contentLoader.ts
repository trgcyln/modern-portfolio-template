import matter from 'gray-matter';

// Import markdown files as raw strings
import profileMd from '../../content/profile.md?raw';
import experienceMd from '../../content/experience.md?raw';
import projectsMd from '../../content/projects.md?raw';
import skillsMd from '../../content/skills.md?raw';
import educationMd from '../../content/education.md?raw';
import certificationsMd from '../../content/certifications.md?raw';

export interface ProfileData {
  name: string;
  title: string;
  subtitle?: string;
  location: string;
  remote: boolean;
  description: string;
  email: string;
  website: string;
  github?: string;
  linkedin?: string;
  hackerrank?: string;
  freelancer?: string;
  careerHighlights: string[];
  socialLinks?: Record<string, string>;
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectData {
  title: string;
  description: string;
  type: string;
  metrics?: string;
  technologies: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationData {
  institution: string;
  faculty: string;
  degree: string;
  period: string;
  location?: string;
  description?: string;
  courses: string[];
  project: {
    title: string;
    description: string;
    link?: string;
  };
}

export interface CertificationData {
  title: string;
  issuer?: string;
  score?: string;
  date: string;
  credential_id?: string;
  credential_url?: string;
}

export interface LanguageData {
  language: string;
  level: string;
}

// Parse YAML-style markdown content
function parseMarkdownSection(content: string): any {
  const lines = content.trim().split('\n');
  const data: any = {};
  let currentKey = '';
  let currentArray: string[] = [];
  let inMultiline = false;
  let multilineContent: string[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Skip empty lines and comments
    if (!trimmedLine || trimmedLine.startsWith('#')) continue;

    // Handle multiline (|)
    if (trimmedLine.includes('|')) {
      inMultiline = true;
      currentKey = trimmedLine.split(':')[0].trim();
      multilineContent = [];
      continue;
    }

    if (inMultiline) {
      if (line.startsWith('  ') && !line.includes(':')) {
        multilineContent.push(line.trim());
      } else {
        data[currentKey] = multilineContent.join('\n');
        inMultiline = false;
        multilineContent = [];
      }
    }

    // Handle arrays (lines starting with -)
    if (trimmedLine.startsWith('-')) {
      const value = trimmedLine.substring(1).trim();
      if (currentKey) {
        if (!Array.isArray(data[currentKey])) {
          data[currentKey] = [];
        }
        data[currentKey].push(value);
      } else {
        currentArray.push(value);
      }
      continue;
    }

    // Handle key-value pairs
    if (trimmedLine.includes(':')) {
      const [key, ...valueParts] = trimmedLine.split(':');
      const value = valueParts.join(':').trim();
      currentKey = key.trim();

      if (value) {
        // Check if boolean
        if (value === 'true') data[currentKey] = true;
        else if (value === 'false') data[currentKey] = false;
        else data[currentKey] = value;
      } else {
        // Prepare for nested object or array
        data[currentKey] = {};
      }
    }
  }

  // Handle any remaining multiline content
  if (inMultiline && multilineContent.length > 0) {
    data[currentKey] = multilineContent.join('\n');
  }

  // Add orphaned array if exists
  if (currentArray.length > 0 && !currentKey) {
    return currentArray;
  }

  return data;
}

// Parse profile data
export function loadProfileData(): ProfileData {
  const sections = profileMd.split('##').filter(s => s.trim());
  const data: any = {};

  sections.forEach(section => {
    const [title, ...content] = section.trim().split('\n');
    const sectionKey = title.trim().toLowerCase().replace(/ /g, '_');
    const parsed = parseMarkdownSection(content.join('\n'));

    if (sectionKey === 'career_highlights') {
      data.careerHighlights = parsed;
    } else {
      Object.assign(data, parsed);
    }
  });

  return data as ProfileData;
}

// Parse experience data
export function loadExperienceData(): ExperienceData[] {
  const jobs = experienceMd.split('---').filter(s => s.trim() && !s.startsWith('#'));

  return jobs.map(job => {
    const sections = job.split('##').filter(s => s.trim());
    return parseMarkdownSection(sections[0]) as ExperienceData;
  });
}

// Parse projects data
export function loadProjectsData(): ProjectData[] {
  const projects = projectsMd.split('---').filter(s => s.trim() && !s.startsWith('#'));

  return projects.map(project => {
    const sections = project.split('##').filter(s => s.trim());
    return parseMarkdownSection(sections[0]) as ProjectData;
  });
}

// Parse skills data
export function loadSkillsData(): SkillCategory[] {
  const sections = skillsMd.split('##').filter(s => s.trim());

  return sections.map(section => {
    const [title, ...content] = section.trim().split('\n');
    const skills = content
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.trim().substring(1).trim());

    return {
      title: title.trim(),
      skills
    };
  });
}

// Parse education data
export function loadEducationData(): EducationData[] {
  const degrees = educationMd.split('---').filter(s => s.trim() && !s.startsWith('#'));

  return degrees.map(degree => {
    const sections = degree.split('##').filter(s => s.trim());
    return parseMarkdownSection(sections[0]) as EducationData;
  });
}

// Parse certifications data
export function loadCertificationsData(): { certifications: CertificationData[], languages: LanguageData[] } {
  const mainSections = certificationsMd.split('## ').filter(s => s.trim());

  const certifications: CertificationData[] = [];
  const languages: LanguageData[] = [];

  mainSections.forEach(section => {
    if (section.toLowerCase().startsWith('certifications')) {
      const certs = section.split('###').filter(s => s.trim() && !s.toLowerCase().includes('certifications'));
      certs.forEach(cert => {
        const parsed = parseMarkdownSection(cert);
        if (parsed.title) certifications.push(parsed as CertificationData);
      });
    } else if (section.toLowerCase().startsWith('languages')) {
      const langs = section.split('###').filter(s => s.trim() && !s.toLowerCase().includes('languages'));
      langs.forEach(lang => {
        const parsed = parseMarkdownSection(lang);
        if (parsed.language) languages.push(parsed as LanguageData);
      });
    }
  });

  return { certifications, languages };
}
