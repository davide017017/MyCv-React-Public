import React from 'react';
import Layout from './components/TwoColumnsLayout';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import RoundPhoto from './components/Photo';
import Photo from './assets/img/photodavidemartinico.jpg';
import ContactCard from './components/Contact';
import SkillsSection from './components/Skills';
import Languages from './components/Languages';
import Interests from './components/Interest';
import License from './components/Patent';
import Consent from './components/Aut&Other';

const App: React.FC = () => {
  
  const miaDataDiNascita = new Date('1990-02-20');
  
  interface Language {
    name: string;
    level: string; 
  }

  const myLanguages: Language[] = [
    { name: 'Italiano', level: 'Madrelingua' },
    { name: 'Inglese', level: 'B2' },
  ];

  return (
    <Layout
      leftColumn={
        <div className=''>
          <Header name="Davide Martinico" role="&lt;Sviluppatore full stack junior&gt;" />
          <AboutMe />
          <Education />
          <WorkExperience /> 
        </div>
      }
      rightColumn={
        <>
          <div className='flex justify-center pt-6 '>
            <RoundPhoto src={Photo} alt="Profile photo of Davide Martinico" />
          </div>
          <div className='flex justify-center pt-4'>
            <ContactCard
              email="davide017@hotmail.it"
              phone="340 3496620"
              github="davide017017"
              birthDate={miaDataDiNascita}
            />
          </div>

          <SkillsSection />
          <Languages languages={myLanguages} />
          <Interests interests={[{ name: 'Informatica' }, { name: 'Giardinaggio' }, { name: 'Manga' }, { name: 'Viaggi' }, { name: 'Batteria (strumento musicale)' }, { name: 'Cucina' }]} />
          <License licenseType="B" />
          <Consent text={`Autorizzo il trattamento dei miei dati personali ai sensi del Dlgs 196 del 30 giugno 2003 e dell'art. 13 GDPR`} />
        </>
      }
    />
  );
};

export default App;
