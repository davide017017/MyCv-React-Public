import { cvData } from '../../data/cvData';
import { Code, Leaf, Book, Plane, Music, Flame, HeartHandshake } from 'lucide-react';

const iconComponents: Record<string, JSX.Element> = {
  Code: <Code className="w-4 h-4 text-purple-500" />,
  Leaf: <Leaf className="w-4 h-4 text-green-600" />,
  Book: <Book className="w-4 h-4 text-yellow-600" />,
  Plane: <Plane className="w-4 h-4 text-blue-500" />,
  Music: <Music className="w-4 h-4 text-pink-500" />,
  Flame: <Flame className="w-4 h-4 text-orange-500" />,
};

const Interests = () => (
  <section className="mb-6 px-4 print:mb-2">
    <h2 className="text-xl font-semibold text-primary mb-2 border-b border-border pb-1 flex items-center gap-2 print:text-lg">
      <HeartHandshake className="w-5 h-5 text-primary" />
      Interessi
    </h2>
    <ul className="flex flex-wrap gap-2">
      {cvData.interests.map(({ label, icon }, index) => (
        <li
          key={index}
          className="badge flex items-center gap-1 bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] px-2 py-1 rounded text-sm"
        >
          {iconComponents[icon] ?? <HeartHandshake className="w-4 h-4 text-primary" />}
          <span>{label}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Interests;
