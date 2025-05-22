'use client';
import React from 'react';
import Image from 'next/image';
import { FaBasketballBall, FaParking, FaDumbbell } from 'react-icons/fa';
import { MdPool, MdSportsEsports, MdOutlineKitchen, MdSelfImprovement } from 'react-icons/md';
import { GiPlayButton, GiLotus } from 'react-icons/gi';

type AmenitiesType = {
  icon: React.ElementType;
  text: string;
};

const amenities1: AmenitiesType[] = [
  { icon: FaBasketballBall, text: 'Basketball Court' },
  { icon: MdPool, text: 'Swimming Pool' },
  { icon: GiPlayButton, text: 'Play Court' },
  { icon: MdSportsEsports, text: 'Indoor Games' },
];

const amenities2: AmenitiesType[] = [
  { icon: FaParking, text: 'Car Parking' },
  { icon: FaDumbbell, text: 'Gymnasium' },
  { icon: GiLotus, text: 'Yoga Deck' },
  { icon: MdOutlineKitchen, text: '30 + Amenities' },
];

const Amenities: React.FC = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className="flex flex-col gap-4">
              {amenities1.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="icon-box">
                    <Icon className="icon-style" />
                    <span className="text-lg font-semibold">{feature.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
                {amenities2.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="icon-box">
                      <Icon className="icon-style" />
                      <span className="text-lg font-semibold">{feature.text}</span>
                    </div>
                  );
                })}
            </div>
            <div className='flex flex-col gap-8'><b><i>For more info contact - 9999988388</i></b></div>
        </div>
        <div>
          <Image
            alt="Godrej Majesty Apartments in sec 12, Greater Noida West"
            src="/images/amenities.png"
            width={600}
            height={400}
            className="rounded-md"
            style={{ height: '400px !important' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
