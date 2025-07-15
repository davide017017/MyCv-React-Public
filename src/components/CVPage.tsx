import { forwardRef } from 'react';

import Name from './sections/Name';
import AboutMe from './sections/AboutMe';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import Interests from './sections/Interests';
import Patent from './sections/Patent';
import Consent from './sections/Consent';
import Photo from './sections/Photo';
import Contact from './sections/Contact';
import Certifications from './sections/Certifications';

const CVPage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <main
      ref={ref}
      id="cv-to-print"
      className="
        text-[10px] leading-[1.1] print:text-[9.5px] print:leading-[1.1]
        mx-auto max-w-[1200px] p-8
        md:flex md:flex-row md:gap-6
        print:flex print:flex-row print:gap-2 print:p-3
        print:max-w-none print:w-full print:m-0
      "
    >
      {/* Colonna sinistra */}
      <aside
        className="
          flex flex-col gap-6
          md:w-[30%]
          print:w-[35%] print:break-inside-avoid print:gap-2
        "
      >
        <Photo />
        <Name />
        <Contact />
        <Skills />
        <Patent />
        <Languages />
        <Interests />
        <Consent />
      </aside>

      {/* Colonna destra */}
      <section
        className="
          flex flex-col gap-2
          md:w-[70%]
          print:w-[65%] print:break-inside-avoid print:gap-2
        "
      >
        <AboutMe />
        <Certifications />
        <Education />
        <Experience />
      </section>
    </main>
  );
});

export default CVPage;
