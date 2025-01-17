import React from 'react';

interface EducationItem {
    course: string;
    institution: string;
    dates: Date | string;
    certification?: string; 
}

const Education: React.FC = () => {
    const educationData: EducationItem[] = [
    {
        course: 'Corso Formazione Full Stack Web Developer',
        institution: 'Musa Formazione',
        dates: '01/08/2024 - in corso ⌛',
        certification: 'IC-PHP | ITS Information Technology Specialist Javascript e HTML CSS',
    },
    {
        course: 'Diploma di Tecnico dei Sistemi Energetici',
        institution: 'Istituto I.P.S.I.A. A.Meucci',
        dates: '14/07/2009',
    },
    ];

    return (
        <section className="pb-4">
            <h2 className="font-bold mb-4 text-green-800">// Formazione</h2>
            <ul className="space-y-4 p-2">
                {educationData.map((item, index) => (
                <li key={index} className="border-b pb-4">
                    <h3 className="font-bold text-purple-300">{item.course}</h3>
                    <p className="text-yellow-300 font-mono">{item.institution} <span className="text-orange-300 text-sm">[{typeof item.dates === 'string' ? item.dates : item.dates.toDateString()}]</span></p>
                    {item.certification && (
                    <p className="text-gray-400 mt-1">Certificazione: {item.certification}</p>
                    )}
                </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;