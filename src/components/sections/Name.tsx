import { cvData } from '../../data/cvData';

const Name = () => {
  const { name, role } = cvData.personalInfo;

  return (
    <section className="text-center mb-4 print:mb-2">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] print:text-2xl">{name}</h1>
      <span
        className="
        inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium
        bg-[var(--color-primary)]/10 text-[var(--color-primary)]
        border border-[var(--color-primary)]/30 tracking-wide
print:bg-transparent print:border print:border-[var(--color-primary)]/20 print:px-2 print:py-0.5      "
      >
        {role}
      </span>
    </section>
  );
};

export default Name;
