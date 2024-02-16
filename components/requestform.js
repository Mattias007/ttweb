"use client"

import { useSearchParams  } from 'next/navigation';
import { Suspense } from 'react'
import { createRequest } from '@/app/actions';
import { useFormState } from 'react-dom'

const initialState = {
  message: '',
}

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


  const [state, formAction] = useFormState(createRequest, initialState)

  return (
    
      <form className='flex gap-6 flex-col  items-center text-lg p-2' action={formAction}>
      <h1>Soovin tagasisidet</h1>
      <label className='flex flex-col md:w-3/5 w-full font-medium'>
          Valitud Pakket:
          <select className="bg-white border border-gray-400 rounded-md pl-2 h-9 text-wrap" defaultValue={option} name="pakket">       
            <option value="Kortermaja200">Korter 200Mbit</option>
            <option value="Kortermaja100">Korter 100Mbit</option>
            <option value="Raadio12">Raadio 12Mbit/2Mbit</option>
            <option value="Raadio16">Raadio 16Mbit/4Mbit</option>
            <option value="Raadio32">Raadio 32Mbit/8Mbit</option>

          </select>
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Nimi:
          <input required className='border border-gray-400 rounded-md pl-2 h-9' type="text" name="name"/>
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Email:
          <input required type="email" className='border border-gray-400 rounded-md pl-2 h-9' name="email"/>
        </label>
        <label className='flex flex-col  md:w-3/5 w-full'>
          Lisainfo:
          <input required type='text' name="extra" className='border border-gray-400 rounded-md pl-2 h-9'/>
        </label>

        <p>
        {state?.message}
        </p>
        
        <button className='bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-white rounded-md p-2 md:w-3/5 w-full hover:from-blue-500 hover:to-blue-500' type="submit">Saada Teade</button>

      </form>
  );
}
