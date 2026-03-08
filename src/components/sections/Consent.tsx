import { cvData } from '../../data/cvData';
import { FileText } from 'lucide-react';

const Consent = () => (
  <section className="mt-2 px-4 print:mt-0">
    <div className="text-xs italic text-muted flex items-start gap-2 leading-snug">
      <FileText className="w-10 h-10 text-muted flex-shrink-0" />
      <span className="pt-2">{cvData.consent}</span>
    </div>
  </section>
);

export default Consent;
