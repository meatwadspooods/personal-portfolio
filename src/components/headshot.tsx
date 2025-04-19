import React from 'react';

type HeadshotProps = {
  src: string;
  alt?: string;
  className?: string;
}

const Headshot: React.FC<HeadshotProps> = ({src, alt = "Adam Elhamdi headshot", className = "w-[150px] h-[150px]"}) => {
  //base styles
  const basestyles = "rounded-full relative overflow-hidden mb-4"

  return (
    <div className={`${basestyles} ${className}`}>
      <img src={src} alt={alt} className='w-full h-full object-cover'/>
    </div>
  );
};

export default Headshot;
