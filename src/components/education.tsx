import React from 'react';

type EducationProps = {
    logoSrc: string
    degree: string,
    university: string,
    dateRange: string,
}

const Education: React.FC<EducationProps> = ({logoSrc, degree, university, dateRange}) => {
    return(
        <div>
            <div className='flex items-center mb-4'>
                <div className='bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden'>
                    <img
                        className='object-contain w-12 h-12 sm:w-20 sm:h-20'
                        src={logoSrc} alt={'${university} logo'}
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        data-nimg="1"                        
                    />
                </div>

                <div>
                    <h3 className='text-2xl font-semibold text-gray-100' dangerouslySetInnerHTML={{ __html: degree }}/>
                    <p className='text-lg text-gray-300'>{university}</p>
                    <p className='text-gray-400'>{dateRange}</p>
                </div>
            </div>
        </div>
    )
}

export default Education;