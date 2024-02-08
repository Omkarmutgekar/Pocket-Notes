import React from 'react'
import homeimg from '../../assets/image.png'

function HomeImage() {
  return (
    <div className='img-area'>
         <img className='home-img' src={homeimg} alt="" />
    </div>
  )
}

export default HomeImage