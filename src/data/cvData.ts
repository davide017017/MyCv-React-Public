import type { CvData } from '../types/cv';
import htmlCssBadge from '../assets/img/certifications/it-specialist-html-and-css.png';
import jsBadge from '../assets/img/certifications/ITS-Badges_JavaScript_1200px.png';

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

  // aboutMe: `Vengo dal mondo retail, dove ho gestito team e processi per oltre
  //     10 anni. Seguendo una passione, ho scelto di reinventarmi come Full Stack Developer
  //     con l'obiettivo di crescere in questo settore, non solo attraverso il lavoro
  //     ma anche con progetti personali che porto avanti ogni giorno.
  //     Sono una persona curiosa per natura: non mi fermo al codice, ma esploro
  //     nuove tecnologie, strumenti e processi di sviluppo software.
  //     Aver fatto della passione un lavoro mi spinge ad apprendere velocemente,
  //     ad affrontare ogni ostacolo come un'opportunità e a dare il massimo
  //     per raggiungere gli obiettivi, senza paura di mettermi in gioco.`,

  aboutMe: `Vengo dal mondo retail, dove ho gestito team e processi per oltre 10 anni. 
          Seguendo una passione, mi sono reinventato come Full Stack Developer, con l’obiettivo 
          di crescere nel settore attraverso lavoro e progetti personali. 
          Sono curioso e orientato all’apprendimento continuo: esploro nuove tecnologie e 
          affronto ogni sfida come un’opportunità, dando sempre il massimo per raggiungere gli obiettivi.`,

  education: [
    {
      title: 'Corso Full Stack Web Developer',
      institution: 'Musa Formazione',
      date: '01 AGO 2024 - 01 SETT 2025',
      certification: 'IC-PHP, HTML CSS, JavaScript',
    },
    {
      title: 'Diploma di Tecnico dei Sistemi Energetici',
      institution: 'I.P.S.I.A. A.Meucci',
      date: '14 LUG 2009',
    },
  ],

  experiences: [
    {
      role: 'Software Developer',
      company: 'Ariele Global Services',
      date: '28 SETT 2025 - In corso ',
      duties: [
        'Sviluppo full stack di applicazioni web dalla progettazione al deploy',
        'Integrazione API REST e gestione di flussi dati complessi',
        'Automazione di processi per ridurre il lavoro manuale e gli errori',
        'Cura della qualità del codice in termini di performance e sicurezza',
        'Collaborazione con il team per analisi e miglioramento delle soluzioni',
      ],
    },
    {
      role: 'Addetto vendita',
      company: 'Tecnomat (Adeo)',
      date: '26 AGO 2024 - 26 AGO 2025',
      duties: ['Consulenza tecnica', 'Vendita prodotti impianti idraulici'],
    },
    {
      role: 'Responsabile Salumi e Formaggi',
      company: 'Eataly',
      date: '27 LUG 2018 - 25 AGO 2024',
      duties: ['Gestione banco, ordini e turni', 'Gestione fornitori'],
    },
    {
      role: 'Addetto al banco salumi e formaggi',
      company: 'I Sassi S.a.s.',
      date: '20 OTT 2017 - 26 LUG 2018',
      duties: ['Gestione banco e ordini'],
    },
    {
      role: 'Commesso Banco Gastronomia',
      company: 'Coop',
      date: '20 GEN 2017 - 16 LUG 2017',
      duties: ['Preparazione alimenti e vendita al cliente'],
    },
    {
      role: 'Cameriere',
      company: 'Cigierre SPA',
      date: '01 OTT 2016 - 20 GEN 2017',
      duties: ['Servizio in sala / Barista'],
    },
    {
      role: 'Responsabile di Negozio',
      company: 'Royal Food Italia S.r.l.',
      date: '25 GIU 2015 - 20 LUG 2016',
      duties: ['Gestione turni - ordini - incassi - Piano di lavoro'],
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
      duties: ['Gestione autonoma del punto vendita'],
    },
    // {
    //   role: 'Addetto smistamento',
    //   company: 'CMP - Poste Italiane',
    //   date: '06 LUG 2010 - 30 SET 2010',
    //   duties: ['Smistamento posta e pacchi'],
    // },
  ],

  skills: {
    technical: {
      frontend: [
        { name: 'HTML5 / CSS3 ' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Tailwind CSS' },
      ],
      backend: [
        { name: 'PHP' },
        { name: 'Laravel' },
        { name: 'Node.js' },
        { name: 'Python / FastAPI' },
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'API REST' },
        { name: 'Automation & Cron Jobs' },
      ],
    },
    tools: [
      { name: 'Git / GitHub' },
      { name: 'Docker' },
      { name: 'VS Code' },
      { name: 'MySQL Workbench' },
      { name: 'MS Office' },
      { name: 'Adobe Creative Suite' },
      { name: 'AutoCAD' },
    ],
    soft: [
      { name: 'Problem-Solving' },
      { name: 'Team & Leadership' },
      { name: 'Fast Learner' },
      { name: 'Adaptability' },
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
    { label: 'Batteria', icon: 'Music' },
    { label: 'Cucina', icon: 'Flame' },
  ],

  license: 'B - Automunito',

  consent: `Autorizzo il trattamento dei miei dati personali ai sensi del Dlgs 196 del 30 giugno 2003 e dell'art. 13 GDPR`,

  portfolio: 'https://davide-martinico-portfolio.netlify.app/',

  certifications: [
    {
      title: 'HTML & CSS Certified',
      issuer: 'Certiport',
      date: 'Luglio 2025',

      thumbUrl: '/certificates/htmlCSS.jpg',
      imageUrl: '/certificates/htmlCSS.jpg',
    },
    {
      title: 'JavaScript Specialist',
      issuer: 'Certiport',
      date: 'Dicembre 2025',

      thumbUrl: '/certificates/js.jpg',
      imageUrl: '/certificates/js.jpg',
    },
    {
      title: 'PHP Fundamentals',
      issuer: 'ICPHP',
      date: '2026',

      thumbUrl: '/certificates/php.jpg',
      imageUrl: '/certificates/php.jpg',
    },
  ],
};
