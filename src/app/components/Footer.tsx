"use client";
import React from 'react';

const Footer : React.FC = () => {

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className='flex flex-col gap-1 text-white text-justify'>
                <h2 className="text-left text-2xl font-bold mb-4  ">About Us</h2>
                <p>Godrej Properties brings the Godrej Group philosophy of innovation, sustainability and excellence to the real estate industry. Each Godrej Properties development combines a 120–year legacy of excellence and trust with a commitment to cutting-edge design and technology.</p>
            </div>
            <div className='flex flex-col gap-1 text-white'>
                <h2 className="text-left text-2xl font-bold mb-4">Contact Us</h2>
                <p>Email:</p>
                <p>Phone:</p>
                <p>Address:</p>
            </div>
            <div className='flex flex-col gap-1 text-white'>
                <h2 className="text-left text-2xl font-bold mb-4">Follow Us</h2>
                <p>Twitter</p>
                <p>Facebook</p>
                <p>LinkedIn</p>
            </div>
            <div className='flex flex-col gap-1 text-white'>
                <h2 className="text-left text-2xl font-bold mb-4">Legal</h2>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
