import React from 'react';

type HeadshotProps = {
  src: string;
  alt?: string;
  className?: string;
}

//base styles
const baseStyles = "rounded-full relative overflow-hidden mb-4"

const Headshot: React.FC<HeadshotProps> = ({src, alt = "Adam Elhamdi headshot", className = "w-[150px] h-[150px]"}) => {

  return (
    <div className={`${baseStyles} ${className}`}>
      <img src={src} alt={alt} className='w-full h-full object-cover'/>
    </div>
  );
};

export default Headshot;
