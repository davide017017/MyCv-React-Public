import { cvData } from '../../data/cvData';

const AboutMe = () => {
  return (
    <section className="mb-2 px-4">
      <h2 className="text-lg font-semibold text-primary mb-2 border-b border-border pb-1">
        Chi sono
      </h2>
      <p className="text-sm leading-relaxed text-text">{cvData.aboutMe}</p>
    </section>
  );
};

export default AboutMe;
