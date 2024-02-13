"use client"

import { useState } from 'react';

export default function ProblemForm() {

  return (
    
      <form className='flex flex-col items-center text-lg p-2 gap-6' action={createProblem}>
      <h1>Rikke Teatamine</h1>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Nimi:
          <input className='border border-gray-400 rounded-md pl-2 h-9' type="text" name="name"/>
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Email:
          <input type="email" className='border border-gray-400 rounded-md pl-2 h-9' name="email"  />
        </label>

        <label className='flex flex-col  md:w-3/5 w-full'>
          Rikke Kirjeldus:
          <textarea name="message" className='border border-gray-400 rounded-md pl-2 h-9'/>
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Address:
          <input name="address" className='border border-gray-400 rounded-md pl-2 h-9' />
        </label>

        <button className='bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-white rounded-md p-2 md:w-3/5 w-full hover:from-blue-500 hover:to-blue-500' type="submit">Saada Rikke Teatus</button>
        
      </form>
  );
}