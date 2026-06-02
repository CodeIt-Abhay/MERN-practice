import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-8 text-white '>
        <h4 className='bg-black text-white px-5 py-3 rounded-full uppercase target-sm'>Target Audience</h4>
        <button className='bg-gray-200 hover:bg-blue-700 text-black font-bold py-2 px-6 rounded-full cursor-pointer uppercase tracking-widest'>Digital banking system</button>
    </div>
  )
}

export default Navbar