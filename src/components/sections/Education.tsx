import { cvData } from '../../data/cvData';
import type { Education as EducationType } from '../../types';
import { GraduationCap } from 'lucide-react';

const Education = () => (
  <section className="mb-6 px-4">
    <h2 className="text-2xl font-semibold text-primary mb-2  border-b border-border pb-1 flex items-center gap-2 print:text-lg">
      <GraduationCap className="w-5 h-5 text-primary print:w-6 print:h-6" />
      Formazione
    </h2>
    <ul className="space-y-6">
      {cvData.education.map((item: EducationType, index) => (
        <li
          key={index}
          className="border-l-4 border-border border-[var(--color-ed-borderleft)] pl-4"
        >
          <div className="pl-2 grid grid-cols-3 items-center mb-1">
            <h3 className="text-lg font-bold col-span-2 text-[var(--color-primary)]">
              {item.title}
            </h3>
            <p className="text-base text-muted text-right pr-4">{item.date}</p>
          </div>
          <div className="border-l-2 border-[var(--color-primary)] pl-4 ml-2">
            <p className="text-base italic text-accent">{item.institution}</p>
            <div className="border-l-2 border-accent pl-4 ml-2">
              {item.certification && (
                <p className="text-sm italic text-green">{item.certification}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
