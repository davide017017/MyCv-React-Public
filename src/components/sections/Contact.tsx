import { cvData } from '../../data/cvData';
import { Mail, Phone, GithubIcon, Globe } from 'lucide-react';

const Contact = () => {
  const { email, phone, github, portfolio } = cvData.personalInfo;

  return (
    <section className="mb-2 px-4 text-center" aria-label="Contatti">
      <ul className="space-y-2 text-sm flex flex-col items-center border-t border-border pt-3">
        <li className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-500" aria-hidden="true" />
          <a
            href={`mailto:${email}`}
            aria-label={`Invia email a ${email}`}
            className="text-sm text-text hover:text-[var(--color-link-hover)] transition"
          >
            {email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-green-600" aria-hidden="true" />
          <span className="text-sm text-text" aria-label={`Telefono: ${phone}`}>{phone}</span>
        </li>
        <li className="flex items-center gap-2">
          <GithubIcon className="w-4 h-4" aria-hidden="true" />
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Profilo GitHub di ${github} (apre in nuova scheda)`}
            className="text-sm text-text hover:text-[var(--color-link-hover)] transition"
          >
            @{github}
          </a>
        </li>
        <li className="flex flex-col items-center text-sm">
          <a
            href={portfolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio personale (apre in nuova scheda)"
            className="flex flex-col items-center text-text hover:text-[var(--color-link-hover)] transition text-center"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-500" aria-hidden="true" />
              <span>Portfolio</span>
            </div>
            <div className="mt-1">davide-martinico-portfolio.netlify.app</div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
