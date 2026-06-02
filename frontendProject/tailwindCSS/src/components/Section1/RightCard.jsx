import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
    <div className='h-full relative w-58 rounded-3xl overflow-hidden shrink-0 '>
         <img className='h-full w-full object-cover' src={props.img} alt="Pic" />
         <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard