import React from 'react'

const Navbar = () => {
  return (
 <div className='bg-white'>
    <div className='flex items-center justify-between mx-auto  max-w-6xl h-16 font-bold'>
    <div>
        <h1 className='text-2xl font-bold'>job<span className='text-red-700'>Portal</span></h1>
        </div>
        <ul className='flex gap-5 font-meduim items-center'>
            <li>home</li>
            <li>jobs</li>
            <li>browse</li>
          
        </ul>
        </div>
          </div>
  )
}

export default Navbar