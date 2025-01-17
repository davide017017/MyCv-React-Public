import React from 'react';

interface WorkExperienceItem {
    role: string;
    company: string;
    dates: string;
    description: string[];
}

const WorkExperience: React.FC = () => {
    const workExperienceData: WorkExperienceItem[] = [
        {
            role: 'Addetto vendita',
            company: 'Tecnomat (Adeo)',
            dates: '26 AGO 2024 - in corso ⌛',
            description: ['Consulenza tecnica e vendita di prodotti per impianti idraulici.'],
        },
        {
            role: 'Responsabile Salumi e Formaggi',
            company: 'Eataly',
            dates: '27 LUG 18 - 25 AGO 24',
            description: [
                'Gestione del banco - Gestione degli ordini',
                'Gestione dei turni',
                'Relazione con fornitori',
            ],
        },
        {
            role: 'Addetto al banco salumi e formaggi',
            company: 'I Sassi S.a.s.',
            dates: '20 OTT 2017 - 26 LUG 2018',
            description: [
                'Addetto al banco salumi e formaggi',
                'Gestione del banco - Gestione degli ordini',
            ],
        },
        {
            role: 'Commesso Banco Gastronomia',
            company: 'Coop',
            dates: '20 GEN 2017 - 16 LUG 2017',
            description: ['Addetto banco gastronomia dalla preparazione degli alimenti e del banco alla vendita al cliente.'],
        },
        {
            role: 'Cameriere',
            company: 'Cigierre SPA',
            dates: '1 OTT 2016 - 20 GEN 2017',
            description: ['Cameriere di sala', 'Barista.'],
        },
        {
            role: 'Responsabile di Negozio',
            company: 'Royal Food Italia S.r.l.',
            dates: '25 GIU 2015 - 20 LUG 2016',
            description: [
                'Responsabile punto vendita Jhon Stick',
                'Gestione degli ordini',
                'Gestione turni',
                'Gestioni incassi',
                'Gestione piano di lavoro.',
            ],
        },
        {
            role: 'Operatore Burger King',
            company: 'Autogrill S.P.A.',
            dates: '18 SET 2013 - 30 SET 2014',
            description: ['Operatore di cassa.'],
        },
        {
            role: 'Edicolante - Contratto di Associazione',
            company: 'Edicola stazione Brignole',
            dates: '20 SET 2010 - 20 AGO 2013',
            description: [
                'Gestione negozio',
                'Vendita al banco',
                'Controllo merce',
                'Gestione resi',
                'Gestione della cassa.',
            ],
        },
        {
            role: 'Addetto smistamento',
            company: 'CMP all\'aeroporto - Poste Italiane',
            dates: '6 LUG 2010 - 30 SET 2010',
            description: ['Smistamento posta e pacchi.'],
        },
    ];

return (
    <section className="pb-2 ">
        <h2 className="font-bold mb-2 text-green-800">// Work Experience</h2>
        <ul className="space-y-2 p-1"> 
            {workExperienceData.map((item, index) => (
                <li key={index} className="border-b pb-1 ">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold text-violet-300 p-1">{item.role}</h3>
                            <p className="text-yellow-300 font-mono p-1">{item.company}</p>
                        </div>
                        <p className="text-orange-300 text-sm font-light p-3 whitespace-nowrap">{item.dates}</p>
                    </div>
                    <ul className="list-none pl-6 mt-1 text-gray-400">
                        {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </section>
    );
};

export default WorkExperience;