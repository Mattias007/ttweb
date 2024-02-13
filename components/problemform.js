"use client"

import { createProblem } from "@/app/actions";
import { useFormState } from 'react-dom'

const initialState = {
  message: '',
}
 

// ${isMenuOpen ? 'text-cyan-200' : ''}
export default function ProblemForm() {
  const [state, formAction] = useFormState(createProblem, initialState)


  return (
      

      <form className='flex flex-col items-center text-lg p-2 gap-6' action={formAction}>



      <h1>Saada Teade</h1>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Nimi:
          <input required className='border border-gray-400 rounded-md pl-2 h-9' type="text" name="name"/>
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Email:
          <input required type="email" className='border border-gray-400 rounded-md pl-2 h-9' name="email"  />
        </label>

        <label className='flex flex-col  md:w-3/5 w-full'>
          Teade:
          <textarea required name="message" className='border border-gray-400 rounded-md pl-2 h-9'/>
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Address:
          <input name="address" className='border border-gray-400 rounded-md pl-2 h-9' />
        </label>

        <p>
        {state?.message}
        </p>

        <button className='bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-white rounded-md p-2 md:w-3/5 w-full hover:from-blue-500 hover:to-blue-500' type="submit">Saada Teade</button>
        
      </form>
  );
}