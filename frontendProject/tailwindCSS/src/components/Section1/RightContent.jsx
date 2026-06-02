import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 rounded-4xl overflow-x-auto flex flex-nowrap p-6 gap-4 w-2/3'>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent