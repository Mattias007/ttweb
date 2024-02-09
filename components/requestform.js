"use client"

import { useState } from 'react';

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    pakket: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted with data:', formData);
  };

  return (

      <form className='flex gap-2 flex-col  items-center text-lg p-2' onSubmit={handleSubmit}>
      <h1>Contact Form</h1>
      <label className='flex flex-col w-3/5 font-medium'>
          Valitud Pakket:
          <select className="bg-white border border-gray-400 rounded-md pl-2 h-9" name="pakket" value={formData.pakket} onChange={handleChange}>       
            <option value="KKortermaja200">Kortermaja 200Mbit</option>
            <option value="Kortermaja100">Kortermaja 100Mbit</option>
            <option value="Raadio">Raadjointernet</option>

          </select>
        </label>
        <label className='flex flex-col  w-3/5 '>
          Name:
          <input className='border border-gray-400 rounded-md pl-2 h-9' type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label className='flex flex-col  w-3/5'>
          Email:
          <input type="email" className='border border-gray-400 rounded-md pl-2 h-9' name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label className='flex flex-col  w-3/5'>
          Lisa Info:
          <textarea name="text" className='border border-gray-400 rounded-md pl-2 h-9' value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button className='bg-blue-800 text-white rounded-md p-2 w-3/5 hover:bg-blue-500' type="submit">Submit</button>
        
      </form>
  );
}