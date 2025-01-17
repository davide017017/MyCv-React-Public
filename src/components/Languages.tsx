import React from 'react';

interface Language {
    name: string;
    level: string; 
}

interface LanguagesProps {
    languages: Language[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
    return (
        <div className="p-4 text-darklgray-300">
        <h2 className=" font-bold text-green-800 mb-2 whitespace-nowrap">// Lingue</h2>
        <ul className="text-gray-400 pl-6 space-y-1"> 
            {languages.map((lang, index) => (
            <li key={index}>
                <span className="font-medium">{lang.name}:</span> {lang.level}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Languages;