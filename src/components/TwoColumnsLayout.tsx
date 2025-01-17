import React from 'react';

interface LayoutProps {
    leftColumn: React.ReactNode;
    rightColumn: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ leftColumn, rightColumn }) => {
    return (
        <div className=" mx-auto min-w-fit overflow-x-auto"> {/* Overflow sul contenitore */}
            <div className="grid grid-cols-[3fr_2fr] gap-3 mx-auto max-w-screen-lg  text-sm md:text-base box-border p-2 pb-6 bg-slate-500"> 
                <div className="bg-vscode-lighter-background p-3 border border-gray-500 shadow-xl shadow-black min-w-fit">
                    {leftColumn}
                </div>
                <div className="bg-vscode-lighter-background p-2 border border-gray-500 shadow-xl shadow-black w-fit">
                    {rightColumn}
                </div>
            </div>
        </div>
    );
};

export default Layout;
