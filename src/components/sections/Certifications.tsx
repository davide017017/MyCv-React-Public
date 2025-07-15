// src/components/Certifications.tsx
import { cvData } from '../../data/cvData';

const Certifications = () => (
  <section className="mb-1 px-4">
    <div className="flex flex-wrap items-center gap-5">
      {cvData.certifications.map((cert, idx) => (
        <div key={idx} className="flex items-center gap-3 mb-0">
          <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={cert.badgeUrl}
              alt={cert.title}
              className="w-14 h-14 rounded-md shadow"
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
          </a>
          <div className="flex flex-col justify-center text-center">
            <span className="font-bold text-base text-orange-600">{cert.title}</span>
            <span className="text-xs text-muted-foreground">
              {cert.issuer} • {cert.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;
