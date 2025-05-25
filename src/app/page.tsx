'use client';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import NavBar from './components/NavBar';
import Container from './components/Container';
import Image from 'next/image';
import Highlights1 from './components/HighLights1';
import HighLights2 from './components/HighLights2';
import PriceList from './components/PriceList';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Image
        alt="Godrej Majesty"
        src="/images/banner.png"
        width={1520}
        height={650}
        style={{ height: '650px !important' }}
      />
      <Container>
        <section id="about">
          <h1 className="heading-style my-9" >About Us</h1>
          <AboutUs />
        </section>
        <section id="highlights" className="section-style">
          <h1 className="heading-style">Highlights</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div>
              <Highlights1 />
            </div>
            <div>
              <HighLights2 />
            </div>
          </div>
          <div className='mx-auto w-max mt-5'><b><i>For more info contact - +919999988388, +918081148289</i></b></div>
        </section>
        <section id="pricelist" className="section-style">
          <h1 className="heading-style mb-9">Price List</h1>
          <PriceList />
        </section>
        <section id="amenities" className="section-style">
          <h1 className="heading-style mb-9">Amenities</h1>
          <Amenities />
        </section>
        <section id="gallery" className="section-style">
          <h1 className="heading-style mb-9">Gallery</h1>
          <Gallery/>
        </section>
        <section id="location" className="section-style">
          <h1 className="heading-style mb-9">Location</h1>
          <h2 className="text-left text-2xl font-semibold italic mb-6">Location Advantages:</h2>
          <Location />
        </section>
        <section id="contact" className="section-style">
          <h1 className="heading-style mb-9">Contact Us</h1>
          <ContactUs />
        </section>
      </Container>
      <section className="footer-style">
          <Footer />
      </section>
    </div>
  );
}
