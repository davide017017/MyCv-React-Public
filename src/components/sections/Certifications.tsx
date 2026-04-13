import { useState } from 'react';
import { cvData } from '../../data/cvData';

const Certifications = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="mb-4">
      {/* LISTA CERTIFICATI */}
      <div className="flex flex-wrap justify-evenly gap-4">
        {cvData.certifications.map((cert, i) => (
          <div
            key={i}
            className="relative cursor-pointer transition-transform duration-200 hover:scale-110"
            onClick={() => setActive(cert.imageUrl)}
          >
            {/* IMMAGINE */}
            <img
              src={cert.thumbUrl}
              alt={cert.title}
              className="w-52 h-28 object-cover object-top rounded-lg shadow border border-gray-800"
            />

            {/* LABEL */}
            <div
              className="absolute bottom-0 left-0 right-0 
              bg-black/80 text-white text-base font-bold text-center 
              py-2 px-2 rounded-b-lg leading-tight
              [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]"
            >
              {cert.title}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >
          <img src={active} className="max-w-[90%] max-h-[90%] rounded shadow-lg" />
        </div>
      )}
    </section>
  );
};

export default Certifications;
