import React from 'react';

interface Skill {
    name: string;
}

interface SkillCategoryProps {
    title: string;
    skills: Skill[];
}

const SkillList: React.FC<SkillCategoryProps> = ({ title, skills }) => {
    return (
        <div>
        <h3 className="font-semibold text-orange-300">{title}</h3>
        <ul className="list-none pl-0 "> 
            {skills.map((skill, index) => (
            <li key={index} className="py-1"> 
                &lt;&gt; {skill.name}
            </li>
            ))}
        </ul>
        </div>
    );
};

    const SkillsSection: React.FC = () => {
    const technicalSkills: Skill[] = [
        { name: 'HTML5/CSS3/Sass' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Node.js' },
        { name: 'Git' },
        { name: 'MS Office (incl. Outlook)' },
        { name: 'Photoshop' },
        { name: 'Illustrator' },
        { name: 'D365' },
        { name: 'AutoCAD' },
    ];

    const softSkills: Skill[] = [
        { name: 'Teamwork' },
        { name: 'Communication' },
        { name: 'Time Management' },
        { name: 'Problem-Solving' },
        { name: 'Continuous Learning' },
        { name: 'Adaptability' },
        { name: 'Leadership' },
        { name: 'Customer Service' },
        { name: 'Results-Driven' },
    ];

    return (
        <div className=" text-blue-300 p-3 rounded-lg box-border"> 
        <h2 className=" font-bold text-green-800 mb-4 ">// Skills</h2>
        <div className="flex flex-row md:flex-row space-y-4 md:space-y-0 md:space-x-8 "> 
            <SkillList title="Technical Skills >_" skills={technicalSkills} />
            <SkillList title="Soft Skills " skills={softSkills} />
        </div>
        </div>
    );
};

export default SkillsSection;