"use client";
import React from 'react';
import ContactUs from './ContactUs';

const PriceList: React.FC = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center ease-in-out duration-500 hover:shadow-lg">
          <h2 className="text-xl font-bold">Apartments:</h2>
          <h3 className="text-lg font-semibold">3 BHK</h3>
          <p className="text-gray-600">Size: 1754-1993 Sq. Ft.</p>
          <p className="text-gray-600">Price starts from: ₹ 2.43 Cr</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center ease-in-out duration-500 hover:shadow-lg">
          <h2 className="text-xl font-bold">Apartments</h2>
          <h3 className="text-lg font-semibold">3 BHK + Servant</h3>
          <p className="text-gray-600">Size: 2367-2503 Sq. Ft.</p>
          <p className="text-gray-600">Price starts from: ₹ 3.90 Cr</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center ease-in-out duration-500 hover:shadow-lg">
          <h2 className="text-xl font-bold">Apartments</h2>
          <h3 className="text-lg font-semibold">4 BHK</h3>
          <p className="text-gray-600">Size: 2576 Sq. Ft.</p>
          <p className="text-gray-600">Price starts from: ₹ 4.19 Cr</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center ease-in-out duration-500 hover:shadow-lg">
          <h2 className="text-xl font-bold">Apartments</h2>
          <h3 className="text-lg font-semibold">4 BHK + Servant</h3>
          <p className="text-gray-600">Size: 2799 Sq. Ft.</p>
          <p className="text-gray-600">Price starts from: ₹ On Request</p>
        </div>
      </div>
    </div>
    <div className='mx-auto w-max mt-5'><b><i>For more info contact - +919999988388, +918081148289</i></b></div>
    </>
  );
};

export default PriceList;
