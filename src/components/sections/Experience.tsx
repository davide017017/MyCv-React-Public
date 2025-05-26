import { cvData } from '../../data/cvData';
import type { Experience as ExperienceType } from '../../types';
import { Briefcase } from 'lucide-react';

const Experience = () => (
  <section className="mb-6 px-4 print:px-2 print:mb-4">
    <h2 className="text-2xl font-semibold text-primary mb-2 border-b border-border pb-1 flex items-center gap-2 print:text-lg print:mb-1">
      <Briefcase className="w-5 h-5 text-primary print:w-6 print:h-6" />
      Esperienze Lavorative
    </h2>
    <ul className="space-y-6 compact print:space-y-3 ">
      {cvData.experiences.map((item: ExperienceType, index) => (
        <li
          key={index}
          className="border-l-4 border-[var(--color-exp-borderleft)] pl-4  print:pl-2 "
        >
          <div className="pl-2 print:pl-1 mt-6">
            <div className="grid grid-cols-2 items-center  print:mb-0.5">
              <h3 className="text-lg font-bold text-[var(--color-primary)] col-span1 print:text-sm print:font-semibold">
                {item.role}
              </h3>
              <span className="text-sm text-accent text-right pr-8 print:text-xs print:pr-5 ">
                {item.date}
              </span>
            </div>

            <div className="border-l-2 border-[var(--color-primary)] pl-4 ml-2 mt-2 print:pl-2 print:ml-1">
              <p className="text-base italic text-accent mb-2 print:text-sm print:mb-1">
                {item.company}
              </p>
              <div className="border-l-2 border-[var(--color-exp-borderleft-duty )] pl-2 ml-2 print:pl-2 print:ml-1">
                <ul className="list-none pl-4 text-sm text-text space-y-1 print:text-xs">
                  {item.duties.map((duty, i) => (
                    <li key={i}>- {duty}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
