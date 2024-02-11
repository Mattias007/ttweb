"use client"

import { useState } from 'react';

export default function ProblemForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    address: '',
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

  };

  return (
    
      <form className='flex gap-2 flex-col  items-center text-lg p-2' onSubmit={handleSubmit}>
      <h1>Rikke Teatamine</h1>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Nimi:
          <input className='border border-gray-400 rounded-md pl-2 h-9' type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label className='flex flex-col  md:w-3/5 w-full'>
          Email:
          <input type="email" className='border border-gray-400 rounded-md pl-2 h-9' name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label className='flex flex-col  md:w-3/5 w-full'>
          Rikke Kirjeldus:
          <textarea name="text" className='border border-gray-400 rounded-md pl-2 h-9' value={formData.message} onChange={handleChange} />
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Address:
          <input name="text" className='border border-gray-400 rounded-md pl-2 h-9' value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button className='bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-white rounded-md p-2 md:w-3/5 w-full hover:from-blue-500 hover:to-blue-500' type="submit">Submit</button>
        
      </form>
  );
}