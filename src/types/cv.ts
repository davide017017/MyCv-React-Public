export type ContactInfo = {
  email: string;
  phone: string;
  github: string;
};

export type Skill = {
    name: string;
};

export type SkillSection = {
  frontend: Skill[];
  backend: Skill[];
};

export type Experience = {
    role: string;
    company: string;
    date: string;
    duties: string[];
};

export type Education = {
    title: string;
    institution: string;
    date: string;
    certification?: string;
};

export type Language = {
    name: string;
    level: string;
};

export type CvData = {
    personalInfo: {
      name: string;
      birthDate: Date;
      email: string;
      phone: string;
      github: string;
      role: string;
    };
    aboutMe: string;
    education: Education[];
    experiences: Experience[];
    skills: {
      technical: SkillSection;
      tools: Skill[];
      soft: Skill[];
    };
    languages: Language[];
    interests: {
      label: string;
      icon: string;
    }[];
    license: string;
    consent: string;
    portfolio: string;
    certifications: string[];
};


