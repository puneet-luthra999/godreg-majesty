'use client';

import React from 'react';
import {
  GiEvilTower,
} from 'react-icons/gi';
import {
  MdOutlineHeight,
  MdOutlineKitchen,
  MdSecurity,
} from 'react-icons/md';
import {
  FaParking,
  FaSnowflake,
  FaRegBuilding,
} from 'react-icons/fa';
import {
  RiVipCrown2Line,
} from 'react-icons/ri';

type Feature = {
  icon: React.ElementType;
  text: string;
};

const features2: Feature[] = [
  { icon: RiVipCrown2Line, text: '50,000 Sq.Ft. Ultra-Luxurious Clubhouse' },
  { icon: FaRegBuilding, text: 'Ultra-Luxury Clubhouse & Sports Arena' },
  { icon: MdSecurity, text: 'Smart Home Features & 24x7 Security' },
  { icon: FaSnowflake, text: 'Premium Split ACs in All Rooms' },
];

const HighLights2: React.FC = () => {
  return (
    <div>
      {
        /* Right Column: Features 2 */
        <div className="flex flex-col gap-4">
          {features2.map((feature, index) => {
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

export default HighLights2;

