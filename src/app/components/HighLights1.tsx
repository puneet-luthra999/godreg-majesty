'use client';

import React from 'react';
import {
  GiEvilTower,
} from 'react-icons/gi';
import {
  MdOutlineHeight,
  MdOutlineKitchen,
} from 'react-icons/md';
import {
  FaParking,
} from 'react-icons/fa';

type Feature = {
  icon: React.ElementType;
  text: string;
};

const features1: Feature[] = [
  { icon: GiEvilTower, text: 'G+27 Iconic Towers | Only 4 Homes per Floor' },
  { icon: MdOutlineHeight, text: '11 Ft. Grand Ceiling Height' },
  { icon: MdOutlineKitchen, text: 'FREE Modular Kitchen + Italian Marble Flooring' },
  { icon: FaParking, text: 'Complimentary Parking + Club Membership' },
];

const Highlights1: React.FC = () => {
  return (
    <div>
      {
        /* Left Column: Features 1 */
        <div className="flex flex-col gap-4">
          {features1.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className='icon-box'
              >
                <Icon className="icon-style" />
                <span className="text-lg font-semibold">{feature.text}</span>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Highlights1;

