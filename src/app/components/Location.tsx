"use client";
import React from 'react';
import { FiMapPin } from 'react-icons/fi';


const Location :React.FC = () => {

const locations = [
  '10 mins to Gaur City Mall',
  '5 mins from Top Schools',
  '45 mins to IGI Airport',
  '55 mins to Noida International Airport',
  'Near Top Schools: GD Goenka, St. Teresa',
  'Close to Yatharth Hospital & Yotta Data Centre',
  '25 mins from Buddha International Circuit',
  'Excellent connectivity to Delhi NCR & Expressways',
];


  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='w-full'>
          {locations.map((item, index) => (
                <div key={index} className="loc-box">
                    <FiMapPin className="loc-style" />
                    <span className='mr-[10px]'>|</span>
                    <span className="p-text">{item}</span>
                </div>
            ))}
        </div>
        <div className='w-full'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.298132707486!2d77.338732!3d28.59530455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50405b52da5%3A0xa0f00c5abf50f6de!2sSector%2012%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1744546811839!5m2!1sen!2sin"
            height="450"
            width="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Location;
