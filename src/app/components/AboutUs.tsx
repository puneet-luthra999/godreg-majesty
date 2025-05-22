"use client";
import React from 'react'
import Image from 'next/image';


const AboutUs : React.FC = () => {

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className="flex flex-col gap-4">
            <h2 className="text-left text-2xl font-semibold italic">Welcome to Godrej Properties</h2>
            <p className="p-text">
                Godrej Properties aims to attract both homebuyers and investors with
                its upcoming premium residential development in Sector 146, Noida—a
                location known for its strategic advantages and connectivity.
                <br />
                <br />
                The company has also announced the acquisition of two land parcels in
                Sector 12, Greater Noida West, where it plans to develop a
                large-scale residential township. 
                <br />
                <br />
                Godrej Majesty Noida is designed with efficient space utilization and thoughtfully integrated green
                landscapes, offering a lifestyle centered around peace and
                tranquility. The project benefits from a host of location
                advantages. 
                <br />
                <br />
                It enjoys seamless connectivity to the Noida Expressway,
                is in close proximity to the Sector 146 metro station, and is
                well-linked with surrounding sector roads. 
                <br />
                <br />
                Moreover, convenient access to Jewar International Airport further enhances the project’s
                appeal, making it an ideal residential choice in the region.
                <br />
                <br />
                <b><i>For more info contact - 9999988388</i></b>
            </p>
        </div>
        <div className="flex flex-col">
            <Image alt="Godrej Majesty Apartments in sec 12, Greater Noida West" src="/images/overview.jpg" width={680} height={500} style={{ height: '500px !important' }} className="rounded-md"/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
