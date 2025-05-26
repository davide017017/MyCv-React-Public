import { cvData } from '../../data/cvData';
import type { Language } from '../../types';
import { Globe } from 'lucide-react';

const Languages = () => (
  <section className="mb-6 px-4 print:mb-2">
    <h2 className="text-xl font-semibold text-primary mb-2 border-b border-border pb-1 flex items-center gap-2 print:text-lg">
      <Globe className="w-5 h-5 text-primary" />
      Lingue
    </h2>
    <ul className="space-y-2 compact">
      {cvData.languages.map((lang: Language, index) => (
        <li key={index} className="flex justify-between text-sm">
          <span className="text-text">{lang.name}</span>
          <span
            className="badge 
            px-2 py-1 rounded italic text-xs "
          >
            {lang.level}
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export default Languages;
