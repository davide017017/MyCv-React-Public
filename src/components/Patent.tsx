import React from 'react';

interface LicenseProps { 
    licenseType: string; 
}

const License: React.FC<LicenseProps> = ({ licenseType }) => { 
    return (
        <div className="p-2">
            <h2 className=" text-green-800 mb-2 whitespace-nowrap">// PATENTE DI GUIDA {licenseType}</h2> 
        </div>
    );
};

export default License;