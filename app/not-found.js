import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='max-w-full min-h-screen flex flex-col  justify-center gap-3'>
      <h1 className='font-bold text-4xl'>404</h1>
      <h2>Page Not Found</h2>
      <Link href="/" className='bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-white rounded-lg text-center p-2'>Return Home</Link>
    </div>
  )
}