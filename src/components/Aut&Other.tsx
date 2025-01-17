import React from 'react';

interface ConsentProps {
    text: string;
}

const Consent: React.FC<ConsentProps> = ({ text}) => {
    return (
        <div className=" text-green-300 p-4 w-80">
            <p className="mb-4 break-words">{text}</p>
        </div>
    );
};

export default Consent;