import { cvData } from '../../data/cvData';
import { FileText } from 'lucide-react';

const Consent = () => (
  <section className="mt-2 px-4 print:mt-0">
    <p className="text-xs italic text-muted flex items-start gap-2 leading-snug">
      <FileText className="w-10 h-10 text-muted" />
      <p className="pt-2">{cvData.consent}</p>
    </p>
  </section>
);

export default Consent;
