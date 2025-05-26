import { cvData } from '../../data/cvData';
import { Mail, Phone, GithubIcon } from 'lucide-react';

const Contact = () => {
  const { email, phone, github } = cvData.personalInfo;

  return (
    <section className="mb-2 px-4 text-center ">
      <ul className="space-y-2 text-sm flex flex-col items-center border-t border-border pt-3">
        <li className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-500" />
          <a href={`mailto:${email}`} className="text-sm text-text  hover:text-primary transition">
            {email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-green-600" />
          <span className="text-sm text-text">{phone}</span>
        </li>
        <li className="flex items-center gap-2">
          <GithubIcon className="w-4 h-4 " />
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text hover:text-primary transition"
          >
            @{github}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
