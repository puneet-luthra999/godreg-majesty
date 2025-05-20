"use client";
import Image from 'next/image';
import React from 'react';

const Gallery : React.FC = () => {

  return (
    <div className='flex flex-col gap-6'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
            <Image alt='godrej majesty properties' src="/images/g1.jpg" width={400} height={350}/>
        </div>
        <div>
            <Image alt='godrej majesty properties' src="/images/g2.jpg" width={400} height={350}/>
        </div>
        <div>
            <Image alt='godrej majesty properties' src="/images/g3.jpg" width={400} height={350}/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
            <Image alt='godrej majesty properties' src="/images/g4.jpg" width={400} height={350}/>
        </div>
        <div>
            <Image alt='godrej majesty properties' src="/images/g5.jpg" width={400} height={350}/>
        </div>
        <div>
            <Image alt='godrej majesty properties' src="/images/g6.jpg" width={400} height={350}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery;