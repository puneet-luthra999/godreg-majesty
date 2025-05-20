'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const ContactUs: React.FC= () => {

  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/send-enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setStatus(data.message);
    if (res.ok) {
      setFormData({ fullName: '', subject: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='card'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="inputBox" />
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="inputBox" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="inputBox" />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="inputBox" />
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required className="inputBox" rows={4}></textarea>
              {status && <p className="mt-2 text-sm text-green-600">{status}</p>}
              <button type="submit" className="button">
                  Submit
              </button>
            </form>
          </div>
          <div className='card '>
            <Image alt="contactus" src="/images/callus.png" width={400} height={400}/>
          </div>
      </div>
    </div>
  );
};

export default ContactUs;
