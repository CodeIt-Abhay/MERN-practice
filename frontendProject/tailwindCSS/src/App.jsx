import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  const users=[
  {
    img:'https://media.gettyimages.com/id/2094338791/photo/portrait-of-a-happy-handsome-young-entrepreneur-sitting-and-using-digital-tablet-on-a-meeting.jpg?s=612x612&w=0&k=20&c=-fJJJvp6ABcfjsr_M_Mr2FIDnjQHKm0CTo2u-MPJ2n0=',
    intro:'',
    color:'royalblue',
    tag:'Satisfied'
  },
  {
    img:'https://media.gettyimages.com/id/2035915077/photo/professional-woman-smiling-while-using-digital-tablet-against-dark-wall.jpg?s=612x612&w=0&k=20&c=PZ4iZic8G_M36hr9nY_HhWKTe4MstASwh0oVHNSFVMA=',
    intro:'',
    color:'lightseagreen',
    tag:'Underserved'
  },
  {
    img:'https://media.istockphoto.com/id/1343846552/photo/businesswoman-working-on-laptop-at-modern-office.jpg?s=612x612&w=0&k=20&c=wsqUcEPKMCcIHFnMbtjBchWJOys0sDkjFI6MaIPntHI=',
    intro:'',
    color:'orange',
    tag:'Underbanked'
  },
  {
    img:'https://media.istockphoto.com/id/2217415301/photo/stylish-asian-woman-in-glasses-posing-in-moody-home-office-lighting.jpg?s=612x612&w=0&k=20&c=NyuVw9731c8J8Lz-2OvHM1E2kvEYtYvz8ahsTMgL-C4=',
    intro:'',
    color:'purple',
    tag:'Berozgar'
  }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App