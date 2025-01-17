import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

interface ContactProps {
    email: string;
    phone?: string;
    github?: string;
    birthDate?: string | Date; 
}

const ContactCard: React.FC<ContactProps> = ({ email, phone, github, birthDate }) => {

    const formatDate = (date: string | Date): string => {
        if (date instanceof Date) {
            return date.toLocaleDateString(); // Formatta la data se è un oggetto Date
        }
        try {
            const parsedDate = new Date(date);
        return parsedDate.toLocaleDateString(); // Prova a parsare una stringa in data
        } catch (error) {
            console.error("Invalid date format:", error);
        return "Data non valida"; // Gestisce il caso di formato data non valido
        }
    };

    return (
        <div className="p-4 mx-auto"> 
            <h2 className=" mb-4 text-green-800  font-bold whitespace-nowrap">// Contact</h2>
            <div className="space-y-3 text-xl">
                <div>
                    <a href={`mailto:${email}`} > 
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-400 text-3xl" />{email}
                    </a>
                </div>
                {phone && (
                    <div>
                        <a href={`tel:${phone}`} >
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-400 text-3xl" />{phone}
                        </a>
                    </div>
                )}
                {github && (
                    <div>
                        <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faGithub} className="mr-2 text-gray-400 text-3xl" />{github}
                        </a>
                    </div>
                )}
                {birthDate && (
                    <div className='whitespace-nowrap text-gray-400'>
                        <FontAwesomeIcon icon={faCalendar} className='mr-6 text-3xl'/> 
                        {formatDate(birthDate)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactCard;