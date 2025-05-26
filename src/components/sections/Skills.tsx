import { cvData } from '../../data/cvData';
import type { Skill } from '../../types';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const SkillGroup = ({
  title,
  skills,
  color,
  Icon,
}: {
  title: string;
  skills: Skill[];
  color: string;
  Icon: React.ElementType;
}) => (
  <div className={`pl-4 border-l-4 ${color} mb-4`}>
    <div className="flex items-center gap-2 mb-1">
      <Icon className={`${color} w-5 h-5`} />
      <h3 className="text-base font-semibold text-text ">{title}</h3>
    </div>
    <ul className="flex flex-wrap gap-2 compact">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="badge bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] px-2 py-1 rounded text-sm whitespace-nowrap"
        >
          {skill.name}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const { frontend, backend } = cvData.skills.technical;
  const { tools, soft } = cvData.skills;

  return (
    <section className="mb-6 px-4 print:mb-2">
      <h2 className="text-2xl font-semibold text-primary mb-4 border-b border-border pb-1 print:text-lg">
        Competenze
      </h2>
      <div className="space-y-4">
        <SkillGroup
          title="Frontend"
          skills={frontend}
          color="border-blue-400 text-blue-400"
          Icon={Code}
        />
        <SkillGroup
          title="Backend"
          skills={backend}
          color="border-green-500 text-green-500"
          Icon={Database}
        />
        <SkillGroup
          title="Strumenti"
          skills={tools}
          color="border-purple-500 text-purple-500"
          Icon={Wrench}
        />
        <SkillGroup
          title="Soft Skills"
          skills={soft}
          color="border-yellow-500 text-yellow-600"
          Icon={Brain}
        />
      </div>
    </section>
  );
};

export default Skills;
