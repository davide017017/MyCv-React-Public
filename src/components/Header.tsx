import React from 'react';

interface HeaderProps {
    name: string;
    role: string;
}

const Header: React.FC<HeaderProps> = ({ name, role }) => {
    return (
        <header className="py-2 text-center"> {/* Padding verticale e allineamento al centro */}
            <h1 className=" font-bold tracking-tight text-red-400"> {/* Nome */}
                {name}
            </h1>
            <p className="min-w-full whitespace-nowrap mt-2 text-blue-300 font-bold "> {/* Ruolo */}
            {role}
            </p>
        </header>
    );
};

export default Header;