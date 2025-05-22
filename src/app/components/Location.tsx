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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.13599486826!2d77.47882719993278!3d28.565672200153085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5228dabc701%3A0x21b5ca0ce3446638!2sGodrej%20Majesty%2C%20Sector%2012%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1747919921785!5m2!1sen!2sin"
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
