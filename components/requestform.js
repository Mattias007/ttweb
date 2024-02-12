"use client"

import { useState } from 'react';
import { useSearchParams  } from 'next/navigation';
import { Suspense } from 'react'


export default function RequestForm() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Form />
    </Suspense>
  )
}

function Form() {
  const searchParams = useSearchParams()
 
  const option = searchParams.get('option')


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    extra: '',
    pakket: `${option}`,
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
    
      <form className='flex gap-6 flex-col  items-center text-lg p-2' onSubmit={handleSubmit}>
      <h1>Pakketi Tellimine</h1>
      <label className='flex flex-col md:w-3/5 w-full font-medium'>
          Valitud Pakket:
          <select className="bg-white border border-gray-400 rounded-md pl-2 h-9 text-wrap" name="pakket" value={formData.pakket} onChange={handleChange}>       
            <option value="Kortermaja200">Korter 200Mbit</option>
            <option value="Kortermaja100">Korter 100Mbit</option>
            <option value="Raadio12">Raadio 12Mbit/2Mbit</option>
            <option value="Raadio16">Raadio 16Mbit/4Mbit</option>
            <option value="Raadio32">Raadio 32Mbit/8Mbit</option>

          </select>
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Nimi:
          <input className='border border-gray-400 rounded-md pl-2 h-9' type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Email:
          <input type="email" className='border border-gray-400 rounded-md pl-2 h-9' name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Lisa Info:
          <input type='text' name="extra"className='border border-gray-400 rounded-md pl-2 h-9' value={formData.extra} onChange={handleChange} />
        </label>
        <button className='bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-white rounded-md p-2 md:w-3/5 w-full hover:from-blue-500 hover:to-blue-500' type="submit">Saada Tellimus</button>

      </form>
  );
}