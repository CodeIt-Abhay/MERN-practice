import React from 'react'

const RightCardContent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold '>{props.id + 1}</h2>
            <div>
                <p className=' text-shadow-2xs txt-lg leading-relaxed mb-14 text-white font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate esse optio modi ut reiciendis cumque doloremque eaque quam quaerat!</p>
                <div className='flex justify-between'>
                    <button className={`text-white font-medium px-6 py-2 rounded-full `} style={{ backgroundColor: props.color }}>
                        {props.tag}
                    </button>
                    <button className=' text-white font-medium px-3 py-2 rounded-full' style={{ backgroundColor: props.color }}><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
         </div>
  )
}

export default RightCardContent