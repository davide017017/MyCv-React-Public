import React from 'react';

interface Interest {
    name: string;
}

interface InterestsProps {
    interests: Interest[];
}

const Interests: React.FC<InterestsProps> = ({ interests }) => {
    return (
        <div className="p-4 text-gray-300">
            <h2 className="font-bold text-green-800 mb-2 whitespace-nowrap">// Interests</h2>
            <ul className="list-none pl-0 space-y-1">
                {interests.map((interest, index) => (
                <li key={index} className="py-1 whitespace-nowrap">
                    &lt;&gt; {interest.name}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Interests;