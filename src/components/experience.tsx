import React from 'react';

type ExperienceCardProps = {
    logoSrc: string,
    jobTitle: string,
    company: string,
    location: string,
    dateRange: string,
    bullets: string[],
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({logoSrc, jobTitle, company, location, dateRange, bullets}) =>{
    return(
        <div className='mb-10'>
            <div className='flex items-start mb-2'>
                <div className='bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden'>
                    <img
                        src={logoSrc}
                        alt={`${company} logo`}
                        className='object-contain'
                        loading='lazy'
                        width="40"
                        height="40"
                        decoding="async"
                        data-nimg="1"
                    />
                </div>

                <div>
                    <h3 className='text-2xl font-semibold text-gray-100'>{jobTitle}</h3>
                    <p className='text-lg text-gray-300'>{company} - {location}</p>
                    <p className='text-gray-400'>{dateRange}</p>
                </div>
            </div>

            <div>
                <ul className='space-y-2 text-gray-300 mb-4'>
                    {bullets.map((item, idx) =>(
                        <li className='flex items-start' key={idx}>
                            <span className='mr-2 mt-1.5 text-gray-500 text-3xl'>•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default ExperienceCard;