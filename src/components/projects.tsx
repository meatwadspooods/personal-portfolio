import React from 'react';
import '../index.css'

type ProjectsCardProps = {
    projectTitle: string,
    technologies: string,
    dateRange: string,
    bullets: string[],
};

const ProjectsCard: React.FC<ProjectsCardProps> = ({projectTitle, technologies, dateRange, bullets}) =>{
    return(
        <div className='mb-10'>
            <div className='flex items-start mb-2'>
                <div>
                    <h3 className='text-2xl font-semibold text-gray-100'>{projectTitle}</h3>
                    <p className='text-lg text-gray-300'>{technologies}</p>
                    <p className='text-gray-400'>{dateRange}</p>
                </div>
            </div>

            <div>
                <ul className='space-y-2 text-gray-300 mb-4 pt-3'>
                    {bullets.map((item, idx) =>(
                        <li className='flex gap-2 items-start' key={idx}>
                            <span className='mr-2 mt-1.5 text-gray-500 text-4xl'>•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default ProjectsCard;