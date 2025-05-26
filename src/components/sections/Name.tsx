import { cvData } from '../../data/cvData';

const Name = () => {
  const { name, role } = cvData.personalInfo;

  return (
    <section className="text-center mb-4 print:mb-2">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] print:text-2xl">{name}</h1>
      <h2 className="text-lg text-[var(--color-text)]">{role}</h2>
    </section>
  );
};

export default Name;
