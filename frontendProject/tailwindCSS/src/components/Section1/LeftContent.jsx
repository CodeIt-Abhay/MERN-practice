import React from 'react'
import Arrow from './Arrow'
import HeroText from './HeroText'
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-2/5 '>
         <HeroText/>
         <Arrow/>
         
    </div>
  )
}

export default LeftContent