import type { CvData } from '../types/cv';

export const cvData: CvData = {
  personalInfo: {
    name: 'Davide Martinico',
    birthDate: new Date('1990-02-20'),
    email: 'davide017@hotmail.it',
    phone: '340 3496620',
    github: 'davide017017',
    role: 'Junior Full-Stack Developer',
    portfolio: 'https://davide-martinico-portfolio.netlify.app/',
  },

  aboutMe: `Dopo oltre 10 anni di esperienza nel settore GDO e Retail, 
  dove ho ricoperto ruoli di gestione e coordinamento, 
  sto completando la mia formazione come Full Stack Web Developer. 
  Cerco un'opportunità in ambito IT per unire competenze tecniche e soft skills, 
  con un forte orientamento al lavoro di squadra e agli obiettivi.`,

  education: [
    {
      title: 'Corso Full Stack Web Developer',
      institution: 'Musa Formazione',
      date: '01/08/2024 - in corso ⌛',
      certification: 'IC-PHP, HTML CSS, JavaScript',
    },
    {
      title: 'Diploma di Tecnico dei Sistemi Energetici',
      institution: 'I.P.S.I.A. A.Meucci',
      date: '14/07/2009',
    },
  ],

  experiences: [
    {
      role: 'Addetto vendita',
      company: 'Tecnomat (Adeo)',
      date: '26 AGO 2024 - in corso ⌛',
      duties: ['Consulenza tecnica', 'Vendita prodotti impianti idraulici'],
    },
    {
      role: 'Responsabile Salumi e Formaggi',
      company: 'Eataly',
      date: '27 LUG 2018 - 25 AGO 2024',
      duties: ['Gestione banco', 'Gestione ordini e turni', 'Relazione fornitori'],
    },
    {
      role: 'Addetto al banco salumi e formaggi',
      company: 'I Sassi S.a.s.',
      date: '20 OTT 2017 - 26 LUG 2018',
      duties: ['Gestione banco', 'Gestione ordini'],
    },
    {
      role: 'Commesso Banco Gastronomia',
      company: 'Coop',
      date: '20 GEN 2017 - 16 LUG 2017',
      duties: ['Preparazione alimenti', 'Vendita al cliente'],
    },
    {
      role: 'Cameriere',
      company: 'Cigierre SPA',
      date: '01 OTT 2016 - 20 GEN 2017',
      duties: ['Servizio in sala', 'Barista'],
    },
    {
      role: 'Responsabile di Negozio',
      company: 'Royal Food Italia S.r.l.',
      date: '25 GIU 2015 - 20 LUG 2016',
      duties: ['Gestione turni', 'Gestione ordini', 'Gestione incassi', 'Piano di lavoro'],
    },
    {
      role: 'Operatore Burger King',
      company: 'Autogrill S.P.A.',
      date: '18 SET 2013 - 30 SET 2014',
      duties: ['Operatore di cassa'],
    },
    {
      role: 'Edicolante',
      company: 'Edicola stazione Brignole',
      date: '20 SET 2010 - 20 AGO 2013',
      duties: ['Gestione negozio', 'Gestione resi', 'Gestione cassa'],
    },
    {
      role: 'Addetto smistamento',
      company: 'CMP - Poste Italiane',
      date: '06 LUG 2010 - 30 SET 2010',
      duties: ['Smistamento posta e pacchi'],
    },
  ],

  skills: {
    technical: {
      frontend: [
        { name: 'HTML5/CSS3/Sass' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Blade' },
      ],
      backend: [{ name: 'Node.js' }, { name: 'Laravel' }, { name: 'PHP' }, { name: 'MySQL' }],
    },
    tools: [
      { name: 'Photoshop' },
      { name: 'Illustrator' },
      { name: 'MS Office (Outlook)' },
      { name: 'AutoCAD' },
      { name: 'D365' },
      { name: 'Visual Studio Code' },
      { name: 'MySQL Workbench' },
      { name: 'Docker' },
    ],
    soft: [
      { name: 'Teamwork' },
      { name: 'Communication' },
      { name: 'Time Management' },
      { name: 'Problem-Solving' },
      { name: 'Continuous Learning' },
      { name: 'Adaptability' },
      { name: 'Customer Service' },
      { name: 'Leadership' },
    ],
  },

  languages: [
    { name: 'Italiano', level: 'Madrelingua' },
    { name: 'Inglese', level: 'B2' },
  ],

  interests: [
    { label: 'Informatica', icon: 'Code' },
    { label: 'Giardinaggio', icon: 'Leaf' },
    { label: 'Manga', icon: 'Book' },
    { label: 'Viaggi', icon: 'Plane' },
    { label: 'Batteria (strumento musicale)', icon: 'Music' },
    { label: 'Cucina', icon: 'Flame' },
  ],

  license: 'B',

  consent: `Autorizzo il trattamento dei miei dati personali ai sensi del Dlgs 196 del 30 giugno 2003 e dell'art. 13 GDPR`,

  portfolio: 'https://davide-martinico-portfolio.netlify.app/',

  certifications: [],
};
