import React from 'react';
import headshot from '../assets/headshot.jpg';

type HeadshotProps = {
  headshot_src: string;
  alt?: string;
  className?: string;
}

//base styles
const baseStyles = "rounded-full relative overflow-hidden mb-4"

const Headshot: React.FC<HeadshotProps> = ({ alt = "Adam Elhamdi headshot", className = "w-[150px] h-[150px]"}) => {

  return (
    <div className={`${baseStyles} ${className}`}>
      <img src={headshot} alt={alt} className='w-full h-full object-cover'/>
    </div>
  );
};

export default Headshot;
