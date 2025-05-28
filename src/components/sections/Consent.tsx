import { cvData } from '../../data/cvData';
import { FileText } from 'lucide-react';

const Consent = () => (
  <section className="mt-4 px-4 print:mt-2">
    <p className="text-sm italic text-muted flex items-start gap-2 leading-snug">
      <FileText className="w-10 h-10 text-muted" />
      <p className="pt-2">{cvData.consent}</p>
    </p>
  </section>
);

export default Consent;
