import { cvData } from '../../data/cvData';
import { BadgeCheck } from 'lucide-react';

const Patent = () => (
  <section className="pb-4 ">
    <p className="text-lg text-text flex items-center gap-2">
      <BadgeCheck className="w-4 h-4 text-green-500" />
      <strong className="font-medium">Patente:</strong> {cvData.license}
    </p>
  </section>
);

export default Patent;
